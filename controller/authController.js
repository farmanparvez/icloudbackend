
const User = require("../models/auth");
const Details = require("../models/details");
const Status = require("../models/status");
const catchAsync = require("../utils/catchAsync");

exports.signUp = catchAsync(async (req, res, next) => {
  const { id, password } = req.body;

  await User.create({
    id,
    password,
  });

  res.status(201).json({
    status: "success",
  });
});

exports.details = catchAsync(async (req, res, next) => {

  await Details.create({
    details: req.body,
  });

  res.status(201).json({
    status: "success",
  });
});

exports.details = catchAsync(async (req, res, next) => {

  await Details.create({
    details: req.body,
  });

  res.status(201).json({
    status: "success",
  });
});

exports.status = catchAsync(async (req, res, next) => {

  await Status.create({
    status: req.body.status,
  });

  res.status(201).json({
    status: "success",
  });
});

exports.getStatus = catchAsync(async (req, res, next) => {

  const status = await Status.find()

  res.status(201).json({
    status: "success",
    data: status
  });
});
