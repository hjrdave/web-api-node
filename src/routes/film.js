import express from 'express';
import filmController from '../controllers/film.js';

const router = express.Router();
const rootUrl = '/film';

//get films
router.get('/', filmController.getAllFilm);

//get film by film_id
router.get('/:id', filmController.getFilmById);

//get film by rating
router.get('/title/:title', filmController.getFilmByRating);


const filmRoute = {
    rootUrl: rootUrl,
    router: router
};

export default filmRoute;