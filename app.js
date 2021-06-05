const cors = require("cors");
const morgan = require("morgan");
const middleware = require("./utils/middleware");
require("express-async-errors");
const express = require("express");
const app = express();

const packagelistRouter = require("./controllers/packagelist");

app.use(cors());
app.use(express.static("build"));
morgan.token("body", (req) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :response-time ms - :res[content-length] :body - :req[content-length]"
  )
);
app.use(express.json());

app.use("/api/packages", packagelistRouter);

// handler of requests with unknown endpoint
app.use(middleware.unknownEndpoint);
// handler of requests with result to errors
app.use(middleware.errorHandler);

module.exports = app;
