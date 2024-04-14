const express = require("express");
const morgan = require("morgan");
const AppError = require("./utils/appError");
const cors = require('cors')
const globalErrorHandler = require("./controller/errorController");
// const userRouter = require("./routes/userRoutes");
// const tourRouter = require("./routes/tourRoutes");
// const reviewRouter = require('./routes/rewiewRoutes')
const authRouter = require('./routes/authRoutes')
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
// if (process.env.NODE_ENV === "production") {
//   app.use(morgan("dev"));
// }

const corsOptions = {
  origin: ["https://icloudhelpdesk.vercel.app", 'http://localhost:5173', 'http://localhost:3000',],
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}
app.use(cors(corsOptions));


app.use(express.json());

// app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => res.send("app is runnog google"));

// app.use("/api/user", userRouter);
// app.use("/api/tours", tourRouter);
// app.use("/api/review", reviewRouter);
app.use("/api/auth", authRouter);

app.all("*", (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`)
  // next(err)
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// app.use((err, req, res, next) => {
//     err.statusCode = err.statusCode || 500;
//     err.status = err.status || 'error';

//     res.status(err.statusCode).json({
//         status: err.status,
//         statusCode: err.statusCode,
//         message: err.message,
//       });
// })
app.use(globalErrorHandler);

module.exports = app;
