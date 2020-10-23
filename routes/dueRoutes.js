const express = require('express');
const duesController = require('../controller/duesController');
// const authController = require('../controller/authController');

const router = express.Router();

// router.use(authController.protect)

// router.use(authController.restrictTo('admin'))

router.route('/').post(duesController.createDue).get(duesController.getAllDues);
//   .delete(
//     userController.getAllUsers);

router.route('/:id').patch(duesController.updateDues);

module.exports = router;
