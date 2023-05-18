const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
//app.use(express.static(`${__dirname}s`))
app.use((req, res, next) => {
  console.log("Hello from the middleware!!!👋");
  next();
});

app.use("/api/v1/tours", tourRouter); //mounting routers
app.use("/api/v1/users", userRouter); //mounting routers

module.exports = app;

//app.js is only reserved for express purpose. That's why we don't do anything related to ENV.
