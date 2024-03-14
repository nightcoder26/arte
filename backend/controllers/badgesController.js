const Badge = require("../models/badgesModel");

const getBadges = async (req, res) => {
  try {
    const badges = await Badge.find();
    res.json(badges);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error getting all badges /badges ${err}` });
  }
};

const getBadgeById = async (req, res) => {
  try {
    const badge = await Badge.findById(req.params.id);
    if (!badge) {
      return res.status(404).json({ message: "Badge not found" });
    }
    res.json(badge);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Error getting badge by id /badges/:id ${err}` });
  }
};

const createBadge = async (req, res) => {
  try {
    const badge = new Badge({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
    });
    const newBadge = await badge.save();
    res.status(201).json(newBadge);
  } catch (err) {
    res.status(400).json({ message: `Error creating badge /badges ${err}` });
  }
};
