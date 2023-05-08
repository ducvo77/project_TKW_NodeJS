const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');



hbs.handlebars.registerHelper('each_when', function(list, k, v, opts) {
    var i, result = '';
    for (i = 0; i < list.length; ++i)
        if (list[i][k] == v)
            result = result + opts.fn(list[i]);
    return result;
});

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(methodOverride('_method'));

app.use(morgan('combined'));
app.engine(
    'hbs',
    exphbs.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});