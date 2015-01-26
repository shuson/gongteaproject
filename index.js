var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
	res.send("hello world!");
})

app.get('/name', function(req, res){
	
	var result = { name: 'Sam' }

	res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify(result));
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
			{name:'Addon1', price: 1},
			{name:'Addon2', price: 2}
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

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
