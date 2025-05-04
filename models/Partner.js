// models/Partner.js
const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: { type: String },
  website: { type: String, required: true },
  socialLink: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Partner', partnerSchema);
