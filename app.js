const express = require('express');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');
const otpRoutes = require("./routes/otpRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', contactRoutes);
app.use("/api/otp", otpRoutes);

module.exports = app;
