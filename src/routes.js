const express = require('express');

const routes = express.Router();

const CategoryController = require('./app/controllers/CategoryController');

/**
 * Categories
 */
routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.store);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.destroy);

module.exports = routes;
