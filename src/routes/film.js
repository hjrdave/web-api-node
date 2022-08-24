import express from 'express';
import filmController from '../controllers/film.js';

const router = express.Router();

router.get('/', filmController.getFilm);



export default router;