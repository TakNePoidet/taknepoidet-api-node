import { Router } from 'express';
import SocialController from '@app/controllers/SocialController';

const router = Router();
router.get('/social.getAll', SocialController.getAll);
router.get('/social.getItem', SocialController.getItem);

export default router;
