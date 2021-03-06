const Category = require('../models/Category');

class CategoryController {
	async index(req, res) {
		const categories = await Category.find();
		return res.json(categories);
	}

	async show(req, res) {
		const category = await Category.findById(req.params.id);

		return res.json(category);
	}

	async store(req, res) {
		const { name } = req.body;

		if (name === null || name.trim() === '') {
			return res.status(400).json({ error: 'Name is blank' });
		}

		const category = await Category.create(req.body);

		return res.json(category);
	}

	async update(req, res) {
		const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
			new: true
		});

		return res.json(category);
	}

	async destroy(req, res) {
		await Category.findByIdAndDelete(req.params.id);

		return res.send();
	}
}

module.exports = new CategoryController();
