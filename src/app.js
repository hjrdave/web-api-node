import db from './connect.js';
import express from 'express';
import colors from 'colors';
import filmRoute from './routes/film.js';
import actorRoute from './routes/actor.js';

db.connect();

const app = express();
app.set('json spaces', 1);
app.use(filmRoute.rootUrl, filmRoute.router);
app.use(actorRoute.rootUrl, actorRoute.router);

const port = process.env.PORT || 4000;
app.set('port', port);
app.listen(port, function () {
    console.log(' ');
    console.log(`Server is listening on Port: ${port}`.cyan);
    console.log(' ');
    console.log('Available Routes:');
    console.log(`http://localhost:${port}${filmRoute.rootUrl}`.yellow);
    console.log(`http://localhost:${port}${actorRoute.rootUrl}`.yellow);
    console.log(' ');

});


