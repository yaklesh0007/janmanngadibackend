const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const nodemailer = require("nodemailer");
exports.userSignUp = (req, res) => {
  let data = req.body;
  bcryptjs.hash(data.password, 10, function (err, hash) {
    const newData = new User({
      email: data.email,
      password: hash,
      phoneNumber: data.phoneNumber,
    });
    newData.save()
      
      .then((result) => {
          const email = result.email;
          sendEmail(email);
          res
            .status(201)
            .json({
              message: "data saved successfully",
              success: true,
              result,
            });
       
      })
      .catch((err) => {
        res.status(400).json({
          message: err,
          success: false,
        });
      });
  });
};

const sendEmail = (email) => {
  const msg = {
    from: "yaklesh0007@gamil.com",
    to: email,
    subject: "email verification testing",
    text: "Please verify",
  };
  nodemailer
    .createTransport({
      service: "gmail",
      auth: {
        user: "yaklesh0007@gmail.com",
        pass: "vxfmkbfkspteoqgd",
      },
      port: 587,
      host: "smtp.gmail.com",
    })
    .sendMail(msg, (err) => {
      if (err) {
        return res.status(404).json({ message: "email not found" });
      } else {
        console.log("email send!!");
      }
    });
};
