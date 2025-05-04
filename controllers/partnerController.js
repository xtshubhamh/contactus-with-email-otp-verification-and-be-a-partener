// controllers/partnerController.js
const Partner = require('../models/Partner');

exports.createPartner = async (req, res) => {
  try {
    const newEntry = new Partner(req.body);
    await newEntry.save();
    res.status(201).json({ message: 'Partner form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
