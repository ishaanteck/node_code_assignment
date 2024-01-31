const express = require("express");
const router = express.Router();

const questionRoutes = require("./questions.routes");

router.use("/question", questionRoutes);

module.exports = router;
