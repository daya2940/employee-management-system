const { check } = require("express-validator");

exports.userSignupValidator = [
  check("name").not().isEmpty().withMessage("Name is required"),
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .isLength({ min: 9 })
    .withMessage("Invalid Password"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/)
    .isLength({ min: 9 })
    .withMessage("Invalid Password"),
];
