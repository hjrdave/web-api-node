import express from 'express';
import { format } from 'prettier';
import pkg from 'pg';
const { Client } = pkg;

const connectionString = "postgres://postgres:postgres@localhost:5432/dvdrental";

const client = new Client({
    connectionString: connectionString
});

client.connect();
var app = express();
app.set('port', process.env.PORT || 4000);
app.get('/film', function (req, res, next) {
    client.query('SELECT * FROM film ORDER BY film_id', function (err, result) {
        if (err) {
            console.error(err);
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
});
app.get('/actor', function (req, res, next) {
    client.query('SELECT * FROM actor ORDER BY actor_id', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(JSON.stringify(err));
        }
        res.status(200).send(format(JSON.stringify(result.rows), { semi: false, parser: "json" }));
    });
});
app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});