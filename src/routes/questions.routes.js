const express = require("express");
const router = express.Router();
const { getAnswer } = require("../controllers/questions.controller");
const getAnswerValidation = require("../validations/questions/getAnswer.validation");
const validator = require("../middleware/validator");

router.post(
  "/getAnswer",
  validator(getAnswerValidation),
  getAnswer
);

module.exports = router;
