import express from 'express';

const router = express.Router();
const rootUrl = '/home';

//render view
router.get('/', (req, res) => {
    res.render("index", { msg: 'Hello World' });
});

const homeRoute = {
    rootUrl: rootUrl,
    router: router
};

export default homeRoute;