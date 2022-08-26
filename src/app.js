import db from './connect.js';
import express from 'express';
import path from 'path';
import colors from 'colors';
import filmRoute from './routes/film.js';
import actorRoute from './routes/actor.js';
import homeRoute from './routes/home.js';
db.connect();
const app = express();
app.set('views', path.join('./views', '../src/views'));
app.set('view engine', 'ejs');
app.set('json spaces', 1);
app.use(filmRoute.rootUrl, filmRoute.router);
app.use(actorRoute.rootUrl, actorRoute.router);
app.use(homeRoute.rootUrl, homeRoute.router);

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
    console.log('Available Views:');
    console.log(`http://localhost:${port}${homeRoute.rootUrl}`.yellow);
});


