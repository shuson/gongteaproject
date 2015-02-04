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
var staffs = staffs || [{name:'Staff', deviceId:'<9b70f25b 2c2befb5 f08c41ba 7fb1debe 33e8a51a 929c1d22 942e6cf2 3f9871b9>'}];

var oderIdRunningNo = 0;

app.get('/', function(req,res){
	res.send("hello world!");
})

app.get('/name', function(req, res){
	
	var result = { name: 'Sam' }

    res.json(JSON.stringify(result));
})

app.get('/tellmeMirror', function(req, res){

    res.send("Gao Lin is the most beautifull girl in the world!");
})

app.get('/bless', function(req, res){

	res.send("Bless for NiuNiu Nie, from Family!")
})

app.get('/products', function(req, res){
	var products = {'products':[
			{pid: 1, name:'Tea1', price: 1},
			{pid: 2, name:'Tea2', price: 2},
			{pid: 3, name:'Tea3', price: 3}
		]}

	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
})

app.get('/addons/:id', function(req, res){
	var addons1 = {'addons':[
			{aid: 1, name:'Addon1', price: 1},
			{aid: 2, name:'Addon2', price: 2},
			{aid: 3, name:'Addon3', price: 3}
		]}
	var addons2 = {'addons':[
			{aid: 1, name:'Addon1', price: 1},
			{aid: 2, name:'Addon2', price: 2}
		]}

	var addons = {'addons':[]};
	if(req.params.id === '1'){
		addons = addons1;
	}
	if(req.params.id === '2'){
		addons = addons2;
	}

	res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(addons));
})

app.post('/submit', function(req, res){
	var result = req.body;

	//generate orderId
	var orderId = Util.orderIdGenerator(oderIdRunningNo);

	//to calculate the price
	var orderPrice = 1;

	var orderInfo = {
		orderId: orderId,
		orderPrcessingTime: "",
		orderCollectionPlace: result.orderInfo.orderCollectionPlace,
		orderPrice: orderPrice
	}

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

    res.end();
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

  	res.end();
})

app.post('/addCustomer', function(req, res){
	var result = req.body;

	//console.log("the addCustomer's token is:" + result.name+"---"+result.deviceId);

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
