const express=require('express');
const router=express.Router();
const { createOrder, captureOrder } = require('../controllers/paypal.controller');

router.get('/createOrder', createOrder);
router.get('/captueOrder', captureOrder);

module.exports = router;