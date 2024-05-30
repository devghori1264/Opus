import { Router } from 'express';
import { getDomains, getModels } from './controllers';

const router = Router();

router.get('/domains', getDomains);
router.get('/models', getModels);

export default router;
