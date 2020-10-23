const Dues = require('../models/duesModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

exports.createDue = catchAsync(async (req, res, next) => {
  const due = await Dues.create(req.body);

  res.status(201).json({
    status: 'successful',
    data: due,
  });
});

exports.getAllDues = catchAsync(async (req, res, next) => {
  const dues = await Dues.find({});

  res.status(200).json({
    status: 'successful',
    data: dues,
  });
});

exports.updateDues = catchAsync(async (req, res, next) => {
  const dues = await Dues.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!dues) return next(new AppError('Not found', 400));
  res.status(200).json({
    status: 'successful',
    data: dues,
  });
});
