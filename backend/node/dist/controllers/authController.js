"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = exports.logIn = exports.signUp = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("../logger"));
dotenv_1.default.config();
const secret = process.env.JWT_SECRET || 'your_jwt_secret';
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = new User_1.default({ email, password: hashedPassword });
        yield user.save();
        res.status(201).json({ message: 'User created' });
        logger_1.default.info(`User created: ${email}`);
    }
    catch (error) {
        logger_1.default.error('Error creating user:', error);
        res.status(500).json({ error: 'Error creating user' });
    }
});
exports.signUp = signUp;
const logIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield User_1.default.findOne({ email });
        if (!user) {
            logger_1.default.warn(`Login failed for non-existent user: ${email}`);
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            logger_1.default.warn(`Invalid login credentials for user: ${email}`);
            return res.status(400).json({ error: 'Invalid credentials' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, secret, { expiresIn: '1h' });
        res.json({ token });
        logger_1.default.info(`User logged in: ${email}`);
    }
    catch (error) {
        logger_1.default.error('Error logging in:', error);
        res.status(500).json({ error: 'Error logging in' });
    }
});
exports.logIn = logIn;
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        logger_1.default.warn('No token provided');
        return res.sendStatus(401);
    }
    jsonwebtoken_1.default.verify(token, secret, (err, user) => {
        if (err) {
            logger_1.default.warn('Invalid token');
            return res.sendStatus(403);
        }
        req.user = user; // Explicitly cast to JwtPayload
        next();
    });
};
exports.authenticateToken = authenticateToken;
