const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Josh Rodriguez');
});

module.exports = routes;