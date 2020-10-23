const express = require('express');
const paymentController = require('../controller/paymentController');
const authController = require('../controller/authController');

const router = express.Router();

router.use(authController.protect);

router.post(
  '/makepayments',
  authController.restrictTo('user'),
  paymentController.makePayment
);
router
  .route('/')
  .post(authController.restrictTo('user'), paymentController.createPayment);
//   .delete(
//     userController.getAllUsers);

router.use(authController.restrictTo('admin'));
router.post('/adminpayments', paymentController.createPaymentAdmin);
module.exports = router;
