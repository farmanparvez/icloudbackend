const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createOne = (Modal) =>
  catchAsync(async (req, res, next) => {
    const doc = await Modal.create(req.body);

    res.status(200).json({
      status: "succes",
      data: {
        data: doc,
      },
    });
  });

exports.updateOne = (Modal) =>
  catchAsync(async (req, res, next) => {
    const doc = await Modal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!doc) return next(new AppError("No docement found with that ID", 404));

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.deleteOne = (Modal) =>
  catchAsync(async (req, res, next) => {
    const doc = await Modal.findByIdAndDelete(req.params.id);
    if (!doc) return next(new AppError("No docement found with that ID", 404));

    res.status(204).json({
      status: "success",
      data: null,
    });
  });

exports.getOne = (Modal, popOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Modal.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;
    if (!doc) return next(new AppError("No docement found with that ID", 404));

    res.status(200).json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

exports.getALL = (Modal) =>
  catchAsync(async (req, res, next) => {
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };
    if (!req.params.tourId) filter =  req.query ;
    // if(req.query)
    // console.log(req.query)
    const doc = await Modal.find(filter)
    res.status(200).json({
      status: "success",
      results: doc.length,
      data: {
        data: doc,
      },
    });
  });
