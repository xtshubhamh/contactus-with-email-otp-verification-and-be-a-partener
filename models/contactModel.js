const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: String,
  email: { type: String, required: true },
  phone: String,
  message: { type: String, required: true },
  seo: Boolean,
  emailMarketing: Boolean,
  social: Boolean,
  contentMarketing: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
