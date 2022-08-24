import express from 'express';
import actorController from '../controllers/actor.js';

const router = express.Router();
const rootUrl = '/actor';

//get actors
router.get('/', actorController.getActors);

const actorRoute = {
    rootUrl: rootUrl,
    router: router
};

export default actorRoute;
