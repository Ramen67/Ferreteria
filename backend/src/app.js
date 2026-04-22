const express = require('express');
const cors = require('cors');
const productosRoutes = require('./routes/productos.routes');
const paypalRoutes = require('./routes/paypal.routes')
const app=express();

app.use(cors());
app.use(express());
app.use('/api', productosRoutes);
app.use('/api', paypalRoutes);

module.exports = app;