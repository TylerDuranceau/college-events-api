const { Event } = require('../models');

exports.getAll = async (req, res, next) => {
  try {
    const data = await Event.findAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const { title, description, location } = req.body;

    // validation
    if (!title) {
      return res.status(400).json({ error: 'Title required' });
    }

    const data = await Event.create({
      title,
      description,
      location,
      userId: req.user.id // attach logged-in user
    });

    res.status(201).json(data);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Event.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // ownership check
    if (req.user.id !== item.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await item.update(req.body);

    res.json(item);
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    const item = await Event.findByPk(req.params.id);

    if (!item) {
      return res.status(404).json({ error: 'Event not found' });
    }

    // ownership check
    if (req.user.id !== item.userId) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    await item.destroy();

    res.json({ message: 'Deleted' });
  } catch (err) {
    next(err);
  }
};