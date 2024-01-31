const { SUCCESS_MESSAGES } = require("../constants");
const Logger = require("../logger/index");

const getAnswer = async (req, res, next) => {
  try {
    const { question } = req.body;

    // create log
    Logger.info(`User question: ${question}`);

    const responseData = {
      success: true,
      statusCode: 200,
      message: SUCCESS_MESSAGES.FETCHED.replace(":attribute", "Answer"),
      data: { question: question, answer: "The projected growth rate is 5%." },
    };

    res.send(responseData);
  } catch (error) {
    console.log("There was an issue into QuestionsController:getAnswer : ", error);
    next(error);
  }
};

module.exports = { getAnswer };
