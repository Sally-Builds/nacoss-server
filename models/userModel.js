const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      validate: [validator.isEmail, 'Enter a valid email address'],
      required: [true, 'Please enter an email'],
    },
    name: {
      type: String,
      required: [true, 'enter your name'],
    },
    level: {
      type: String,
      enum: ['first', 'second', 'third', 'fourth'],
      required: [true, 'You must enter your level of study'],
    },
    password: {
      type: String,
      required: [true, 'please enter a password'],
      minLength: 8,
      select: false,
    },
    confirmPassword: {
      type: String,
      required: [true, 'please confirm password'],
      validate: {
        validator: function (confirmPasswrod) {
          return confirmPasswrod === this.password;
        },
        message: 'Password does not match',
      },
    },
    role: {
      type: String,
      required: [true, 'You must have a role'],
      enum: ['user', 'admin'],
      default: 'user',
    },
    passwordChangedAt: Date,
    photo: {
      type: String,
      default: 'default.jpg',
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual('payments', {
  ref: 'Payment',
  localField: '_id',
  foreignField: 'user',
});

userSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'payments',
    select: '-__v',
  });
  next();
});

//encrypt password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.confirmPassword = undefined;
  next();
});

//function to compare password
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

//get the current timestamp of when the password was changed
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

//password changed after
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  //False means not changed
  return false;
};

//user deleted account
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
