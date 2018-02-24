const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const routes = require('./routes/router');

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


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// error handler
// define as the last app.use callback
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

app.use('/', routes);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
