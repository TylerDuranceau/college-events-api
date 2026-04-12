const { Registration } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const data = await Registration.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await Registration.create(req.body);
    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Registration.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });

    await item.update(req.body);
    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const item = await Registration.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: 'Not found' });

    await item.destroy();
    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};