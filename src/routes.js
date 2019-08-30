const express = require('express');

const routes = express.Router();

const CategoryController = require('./app/controllers/CategoryController');

routes.post('/categories', CategoryController.store);

module.exports = routes;
