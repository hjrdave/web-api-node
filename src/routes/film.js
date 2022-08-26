/**
 * Film Table
 * Rows: 1000
 */
import express from 'express';
import filmController from '../controllers/film.js';

const router = express.Router();
const rootUrl = '/film';

//get films
router.get('/', filmController.getAllFilm);

//paginate films by 25
router.get('/paginate/:page', filmController.getFilmByPage);

//get film by film_id
router.get('/:id', filmController.getFilmById);






const filmRoute = {
    rootUrl: rootUrl,
    router: router
};

export default filmRoute;