var express = require('express');
var bodyParser = require('body-parser');

var staffAgent = require('./_staffAPN');
var customerAgent = require('./_customerAPN');

var Util = require('./Util')

var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var customers = customers || [{name:'Kyle', deviceId:'<bdb99a74 deeec21f cd4fd1f4 417c553a 52e33c98 0e4258eb f6e846ea c787c56b>'}];
var staffs = staffs || [{name:'Staff', deviceId:'<26f657eb 5b5d20f4 f4fd4504 435cf819 e6e8bb30 0e0c1800 3499ff04 94e7598e>'}];

app.get('/', function(req,res){
	res.send("hello world!");
})

app.get('/name', function(req, res){
	
	var result = { name: 'Sam' }

    res.json(JSON.stringify(result));
})

app.get('/products', function(req, res){
	var products = require('./data/products')

	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
})

app.get('/addons/:id', function(req, res){

	var addons = require('./data/addons')
	var pid = String(req.params.id);

	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(addons[pid]));
})

app.post('/submit', function(req, res){
	var result = req.body;

	//generate orderId
	var orderId = Util.orderIdGenerator();

	//to calculate the price
	var orderPrice = Util.orderPriceGenerator(result.productInfo.productId, result.productInfo.addonId);

	var orderInfo = {
		orderId: orderId,
		orderPrcessingTime: "",
		orderCollectionPlace: result.orderInfo.orderCollectionPlace,
		orderPrice: orderPrice
	}
	console.log(result.customerInfo);
	var order = {
		orderInfo: orderInfo,
		customerInfo: result.customerInfo,
		productInfo: result.productInfo
	}

	staffAgent.createMessage()
	.set("order", order)
	.device(staffs[0].deviceId)
  	.alert("New order is coming!")
  	.send();

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({'status': 'success'}));
})	

app.post('/confirm', function(req, res){
	var result = req.body;

	var confirmation = {
		orderInfo: result.orderInfo,
		productInfo: result.productInfo
	}

	customerAgent.createMessage()
	.set("confirmation", confirmation)
	.device(customers[0].deviceId)
  	.alert("Your order is confirmed!")
  	.send();

  	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({'status': 'success'}));
})

app.post('/addCustomer', function(req, res){
	var result = req.body;

	res.end();
})

app.post('/clearCustomers', function(req, res){

	customers = [];

	res.end();
})

app.post('/addStaff', function(req, res){
	var result = req.body;

	staffs.push(result);

	res.end();
})

app.post('/clearStaffs', function(req, res){

	staffs = [];

	res.end();
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
