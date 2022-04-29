const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Josh Rod');
});

module.exports = routes;