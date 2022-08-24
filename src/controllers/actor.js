import db from '../connect.js';
import { format } from 'prettier';

const getActors = (req, res, next) => {
    db.query('SELECT * FROM actor ORDER BY actor_id', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
};

export default { getActors };