const Contact = require('../models/contactModel');

exports.submitContactForm = async (req, res) => {
  const { name, email, message, company, phone, seo, emailMarketing, social, contentMarketing } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Name, Email, and Message are required!" });
  }

  try {
    const contact = await Contact.create({
      name, email, message, company, phone, seo, emailMarketing, social, contentMarketing
    });

    res.status(201).json({
      success: true,
      message: "Thank you for contacting us!",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
