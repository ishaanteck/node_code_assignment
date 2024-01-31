const Joi = require("joi");

const validator = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    } else {
      next();
    }
  };
};

module.exports = validator;
