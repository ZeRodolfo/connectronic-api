const Category = require('../models/Category');

class CategoryController {
	async index(req, res) {}

	async show(req, res) {}

	async store(req, res) {
		const { name } = req.body;

		if (name === null || name.trim() === '') {
			return res.status(400).json({ error: 'Name is blank' });
		}

		const category = await Category.create(req.body);

		return res.json(category);
	}

	async update(req, res) {}

	async destroy(req, res) {}
}

module.exports = new CategoryController();
