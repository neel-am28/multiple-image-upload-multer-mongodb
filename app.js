const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const imagesRoute = require('./routes/imagesRoute');
require('dotenv').config();

const app = express();

const port = process.env.port || 4000;

mongoose.connect(process.env.MONGO_URI,
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    () => {
        console.log("Connected to mongodb");    
    }
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.listen(port, (err) => {
    if(err) throw err;
    console.log(`Listening on port ${port}`);
});

app.use('/', imagesRoute);