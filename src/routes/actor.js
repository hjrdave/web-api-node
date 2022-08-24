import express from 'express';
import actorController from '../controllers/actor.js';

const router = express.Router();

router.get('/', actorController.getActors);

export default router;
