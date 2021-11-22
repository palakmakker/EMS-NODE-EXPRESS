const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const mysql = require('mysql');

require('dotenv').config();

const app = express();
const port = process.env.port || 5000;

//parsing middleware
//parse applicaton/x-ww-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));

//parse application/jason
app.use(bodyParser.json());

//stativ file
app.use(express.static('public'));

//templating engine
//exphbs.engine is a change --exphbs is not a function--
app.engine('hbs' , exphbs.engine({extname: '.hbs'}));
app.set('view engine' , 'hbs');

//connection pull
const pool = mysql.createPool({
    connectionLimit: 100,
    host           : process.env.DB_HOST,
    user           : process.env.DB_USER,
    password       : process.env.DB_PASS,
    database       : process.env.DB_NAME

});

//connect db
pool.getConnection((err , connection) => {
        if(err) throw err; // not connected
        console.log('connected as id')
});


const routes = require('./server/routes/user');
app.use('/', routes);

app.listen(port , () => console.log("listening"));


