const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// define all routes here
app.use("/", router);

// handle never used routes
app.all("*", (req, res, next) => {
  const err = new Error("Please enter valid url");
  next(err);
});

// global error handler
app.use((error, req, res, next) => {
    const responseData = {
      success: false,
      statusCode: 200,
      message: error.message || "Something went wrong.",
      data: null,
    };

   res.send(responseData);
});

app.listen(port, () => {
  console.log(`Questions logs app listening on port ${port}`);
});
