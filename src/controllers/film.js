import db from '../connect.js';
import { format } from 'prettier';

const getAllFilm = (req, res, next) => {
    db.query('SELECT * FROM film ORDER BY film_id', function (err, result) {
        if (err) {
            console.error(err);
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
};

const getFilmById = (req, res, next) => {
    const sql = `SELECT * FROM film WHERE film_id = $1`;
    const params = [req.params.id];
    db.query(sql, params, function (err, result) {
        if (err) {
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
};

const getFilmByPage = (req, res, next) => {
    const sql = `
        SELECT * FROM film 
        ORDER BY film_id ASC
        LIMIT $1 
        OFFSET $2;
    `;
    const page = req.params.page;
    const offset = (page * 25);
    //const offset = ((page * 25) + 1);
    const params = [25, offset];
    db.query(sql, params, function (err, result) {

        if (err) {
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
};


export default { getAllFilm, getFilmById, getFilmByPage };