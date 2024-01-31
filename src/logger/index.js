const winston = require("winston");

const format = winston.format.combine(
  winston.format.errors({ stack: true }),
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`
  )
);

const mydate = new Date();
const month = mydate.getMonth() + 1;
const finalMonth = ("0" + month).slice(-2);
const newFilename =
  mydate.getFullYear() + "-" + finalMonth + "-" + mydate.getDate();

const transports = [
  new winston.transports.Console({
    format: winston.format.colorize({ all: true }),
  }),
  new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
  new winston.transports.File({
    handleExceptions: true,
    filename: `./logs/${newFilename}.log`,
  }),
];

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

const Logger = winston.createLogger({
  level: "debug",
  levels,
  format,
  transports,
});

module.exports = Logger;
