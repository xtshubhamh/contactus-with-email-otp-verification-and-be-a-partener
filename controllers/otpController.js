const Otp = require("../models/OtpModel");
const sendMail = require("../utils/sendOtpMail");
// send OTP
exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

  await Otp.deleteMany({ email }); // remove previous OTPs

  await Otp.create({ email, otp: otpCode });

  await sendMail({
    to: email,
    subject: "Your OTP FROM - Sapher",
    html: `<h3>Your OTP is: <b>${otpCode}</b></h3><p>Valid for 5 minutes.</p>`
  });
  

  res.status(200).json({ success: true, message: "OTP sent to email" });
};

// verify OTP
exports.verifyOtp = async (req, res) => {
  const { email, otp } = req.body;

  const validOtp = await Otp.findOne({ email, otp });
  if (!validOtp) {
    return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
  }

  await Otp.deleteOne({ _id: validOtp._id }); // optional cleanup
  res.status(200).json({ success: true, message: "OTP verified successfully" });
};
