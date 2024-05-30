import { Router } from 'express';
import { getDomains, getModels } from './controllers';
import { signUp, logIn } from './controllers/authController';

const router = Router();

router.get('/domains', getDomains);
router.get('/models', getModels);
router.post('/signup', signUp);
router.post('/login', logIn);

export default router;
