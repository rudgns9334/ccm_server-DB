const path = require('path');
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const routes = require('./routes');
const ProblemRouter = require('./controllers/problem');
const MentoRouter = require('./controllers/mentoring');
const TCRouter = require('./controllers/testcase');
const bodyParser = require('body-parser');

const logger = require('./utils/logger');
const n2r = require('./routes/n2r');
const api = require('./routes/index');

const app = express();

app.enable('trust proxy');
app.use(cors());
app.options('*', cors());




app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev', { stream: logger.stream.write }));
} else {
  app.use(morgan('combined', { stream: logger.stream.write }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(ProblemRouter);
app.use(MentoRouter);
app.use(TCRouter);
app.use(cookieParser());
app.use(xss());
app.use(compression());


app.use(session({ secret: 'ccm', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());



app.use(express.static(path.join(__dirname, '..', '..', 'client', 'build')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(routes);
app.use('/users',api);
app.use('/n2r',n2r);






app.use(function (err, req, res, next) {
  res.status(500).json({ code: 500, data: { msg: "Internal Server Error", err: err }});
});



module.exports = app;
