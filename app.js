const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const morgan = require('morgan');
const path = require('path');
const route = require('./src/routes');
const bodyParser = require('body-parser');
const session = require('express-session');
const { engine } = require('express-handlebars');

// const cookieParser = require('cookie-parser');

// app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '/')));
//
// app.set('views', path.join(__dirname, 'views'));
// // console.log(path.join(__dirname, 'src\\views'))

app.use(session({
    secret: 'supersecret',
    resave: true,
    saveUninitialized: true
}))

// HTTP logger
app.use(morgan('combined'));

// Template Engine
app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'src/view'));

// connect DB
const db = require('./src/config/db/mongodb');
db.connect().then();

app.use(
    express.urlencoded({
        extended: false,
    }),
);

//Route init
route(app);

app.listen(port, () => {
    console.log(`Kripto 3D Website listening on http://localhost:${port}`);
});