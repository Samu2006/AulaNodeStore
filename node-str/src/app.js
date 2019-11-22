'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//Conncta ao banco
mongoose.connect('mongodb://localhost:27017/ndstr',
    { useNewUrlParser: true, useUnifiedTopology: true });

// Carregar Models
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

// Carregar Rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', indexRoute);
app.use('/product', productRoute);
app.use('/customer',customerRoute);
app.use('/order',orderRoute);

module.exports = app;