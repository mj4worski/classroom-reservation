const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const routes = require('./routes/router');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/classroom');
const db = mongoose.connection;

// handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // we're connected!
});

const app = express();

// use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db,
  }),
}));

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// error handler
// define as the last app.use callback
app.use((err, req, res) => {
  res.status(err.status || 500);
  res.send(err.message);
});

// Make our db accessible to our router
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
