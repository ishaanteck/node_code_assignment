const joi = require("joi");
const { ERROR_MESSAGES } = require("../../constants");

const getAnswerValidation = joi.object().keys({
  question: joi
    .string()
    .required()
    .messages({
      "any.required": ERROR_MESSAGES.REQUIRED.replace(":attribute", "question"),
    }),
});

module.exports = getAnswerValidation;
