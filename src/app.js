import db from './connect.js';
import express from 'express';
import { default as filmRoute } from './routes/film.js';
import { default as actorRoute } from './routes/actor.js';

db.connect();

const app = express();

app.use('/film', filmRoute);
app.use('/actor', actorRoute);

const port = process.env.PORT || 4000;
app.set('port', port);
app.listen(port, function () {
    console.log(`Server is running... on Port ${port}`);
});


