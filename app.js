const path = require('path');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRoutes');
const dueRouter = require('./routes/dueRoutes');
const paymentRouter = require('./routes/paymentRoutes');
// const AppError = require('./utils/appError');
const globalErrorHandler = require('./controller/errorController');

const app = express();

app.enable('trust proxy');

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname, 'views'));

//middleware
//1) Global middleware
app.use(
  cors({
    credentials: true,
  })
);

app.options('*', cors());

//body parser, reading data from body into req.body
app.use(express.json());
app.use(cookieParser());

//testing middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
//serving static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(`${path.join(__dirname)}/public/img`));

app.use('/api/v1/users', userRouter);
app.use('/api/v1/dues', dueRouter);
app.use('/api/v1/payments', paymentRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(`${__dirname}/public/`));
  app.get(/.*/, (req, res) => res.sendFile(`${__dirname}/public/index.html`));
}

app.use(globalErrorHandler);

module.exports = app;
