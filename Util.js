
var Util = {

	orderIdGenerator : function (){
    						return 'oId' + (new Date()).getTime();
						},
	orderPriceGenerator: function (pId, aId){
							var products = require('./data/products').products;
							var addons = require('./data/addons');
							var product = _findProductByVal(products, pId);
							var addon = _findAddonByVal(addons[pId].addons, aId);


							var price = product.price + addon.price;

							return price;
						}
}

function _findProductByVal(objArray, val){
	for(var i = 0; i < objArray.length; i++){

		if(objArray[i].pid == val){
			return objArray[i];
		}
	}
	return undefined;
}

function _findAddonByVal(objArray, val){
	for(var i = 0; i < objArray.length; i++){

		if(objArray[i].aid == val){
			return objArray[i];
		}
	}
	return undefined;
}

module.exports = Util;