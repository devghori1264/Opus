import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt, { JwtPayload } from 'jsonwebtoken';
import User from '../models/User';
import dotenv from 'dotenv';
import logger from '../logger';

dotenv.config();
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

export const signUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created' });
    logger.info(`User created: ${email}`);
  } catch (error) {
    logger.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
};

export const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      logger.warn(`Login failed for non-existent user: ${email}`);
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      logger.warn(`Invalid login credentials for user: ${email}`);
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
    res.json({ token });
    logger.info(`User logged in: ${email}`);
  } catch (error) {
    logger.error('Error logging in:', error);
    res.status(500).json({ error: 'Error logging in' });
  }
};

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    logger.warn('No token provided');
    return res.sendStatus(401);
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      logger.warn('Invalid token');
      return res.sendStatus(403);
    }
    req.user = user as JwtPayload; // Explicitly cast to JwtPayload
    next();
  });
};
