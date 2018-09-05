/* eslint-disable no-unused-vars */
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const routes = require('./routes/router');
const cors = require('cors');
const path = require('path');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/classroom');
const mongooseConnection = mongoose.connection;

mongooseConnection.on('error', console.error.bind(console, 'connection error:'));
mongooseConnection.once('open', () => {
  // we're connected!
});

const app = express();

const MONTH = (30 * 86400 * 1000);

// FIXME:: MaxAge doesn't for each request
app.use(session({
  secret: 'work hard',
  resave: false,
  rolling: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection,
  }),
  cookie: { maxAge: MONTH },
}));

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Create link to Angular build directory
const distDir = path.join(__dirname, '../../', 'dist/');
app.use(express.static(distDir));

// Make our db accessible to our router
app.use((req, res, next) => {
  req.mongooseConnection = mongooseConnection;
  next();
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

app.use('/', routes);

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port 3000'));
