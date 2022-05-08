const routes = require('express').Router();
const connect = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

routes.get('/', (req, res) => {

    const results = connect.getCollection().find();

    results.toArray().then((lists) => {
        res.status(200).json(lists);
        console.log(`Returned All Contacts`);
    });
});

routes.get('/:id', (req, res) => {
    const contactId = new ObjectId(req.params.id);

    const results = connect.getCollection().find({ _id: contactId });

    results.toArray().then((lists) => {
        res.status(200).json(lists[0]);
        console.log(`Returned Contact ${req.params.id}`);
    });

});

routes.post('/', (req, res) => {
    const contactInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };

    const response = connect.getCollection().insertOne(contactInfo);
    res.status(201).json(response);
});
routes.put('/:id', (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contactInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    };
    const response = connect.getCollection().replaceOne({ _id: contactId }, contactInfo);
    res.status(201).json(response);
});
routes.delete('/:id', (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const response = connect.getCollection().deleteOne({ _id: contactId }, true);
    res.status(201).json(response);
});



module.exports = routes;