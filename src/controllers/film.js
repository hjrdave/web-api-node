import db from '../connect.js';
import { format } from 'prettier';

const getFilm = (req, res, next) => {
    db.query('SELECT * FROM film ORDER BY film_id', function (err, result) {
        if (err) {
            console.error(err);
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
}

export default { getFilm };