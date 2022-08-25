

const renderHome = (req, res, next) => {
    res.render('home', { msg: 'Express' });
};


export default { renderHome };