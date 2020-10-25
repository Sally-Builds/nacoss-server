const axios = require('axios');
const Dues = require('../models/duesModel');
const Payment = require('../models/paymentModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const dues = async (id) => {
  const due = await Dues.findById(id);
  return due;
};

exports.makePayment = async (req, res, next) => {
  try {
    const due = await dues(req.body.duesId);
    const data = {
      tx_ref: Date.now(),
      amount: due.amount,
      currency: 'NGN',
      redirect_url: `${req.protocol}://${req.get('host')}/#/${
        req.user.role === 'admin' ? 'dashboard/admin' : 'dashboard'
      }`,
      // redirect_url: `${req.protocol}://localhost:8080/#/${
      //   req.user.role === 'admin' ? 'dashboard/admin' : 'dashboard'
      // }`,
      payment_options: 'card',
      customer: {
        email: req.user.email,
        phonenumber: '080****4528',
        name: req.user.name,
      },
      meta: {
        dues: due._id,
      },
      customizations: {
        title: 'Nacoss',
        description: `Nacoss due ${due.semester} semester payment`,
        logo: 'https://assets.piedpiper.com/logo.png',
      },
    };
    const result = await axios({
      method: 'POST',
      url: 'https://api.flutterwave.com/v3/payments',
      data,
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET}`,
      },
    });

    res.status(200).json({
      status: 'success',
      data: result.data,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      data: 'Something went wrong',
    });
  }
};

const userCheck = async (user, semester) => {
  const foundUser = await Payment.findOne({ user, semester });
  return foundUser;
};

exports.createPayment = catchAsync(async (req, res, next) => {
  try {
    const result = await axios({
      method: 'GET',
      url: `https://api.flutterwave.com/v3/transactions/${req.body.transaction_id}/verify`,
      headers: {
        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET}`,
      },
    });
    //verify that the response with tx_ref and status and user
    if (
      result.data.data.status === 'successful' &&
      req.body.tx_ref === result.data.data.tx_ref &&
      req.user.email === result.data.data.customer.email
    ) {
      const due = await dues(result.data.data.meta.dues);
      //verify that the amount and currency was correct
      if (
        result.data.data.amount === due.amount &&
        result.data.data.currency === 'NGN'
      ) {
        //prevent duplicate payment by in Db for a user
        const user = await userCheck(req.user.id, due.semester);
        if (user)
          return next(
            new AppError('User has alreadry paid for this semester', 400)
          );
        const payment = await Payment.create({
          user: req.user.id,
          amount: result.data.data.amount,
          semester: due.semester,
        });
        res.status(201).json({
          status: 'success',
          data: payment,
        });
      }
    }
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      data: e,
    });
  }
});

exports.createPaymentAdmin = catchAsync(async (req, res, next) => {
  try {
    const payment = await Payment.create({
      user: req.body.user,
      amount: req.body.amount,
      semester: req.body.semester,
    });
    res.status(201).json({
      status: 'success',
      data: payment,
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      data: e,
    });
  }
});
