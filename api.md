#APIs for RESTful call

1. get all products list
	>method: GET <br />
	param: None <br />
	return: json
	
	```
	http://gongtea.herokuapp.com/products/
	```
	
2. get addons list by product pid
	>method: GET <br />
	param: pid <br />
	return: json
   
   ```
   http://gongtea.herokuapp.com/addons/pid/
   ```
3. post add customer data to register device id
	>method: POST <br />
	param: json <br />
	return: To be discussed <br />
	example: content-type: application/json; request body: {"name":"Kyle", "deviceId":'12345-67890}}
   
   ```
   http://gongtea.herokuapp.com/addCustomer/
   ``` 
4. post clear customers data
	>method: POST <br />
	param: None <br />
	return: To be discussed
   
   ```
   http://gongtea.herokuapp.com/clearCustomers/
   ``` 
5. post add staff data to register device id
	>method: POST <br />
	param: json <br />
	return: To be discussed <br />
	example: content-type: application/json; request body: {"name":"Kyle", "deviceId":'12345-67890'}
   
   ```
   http://gongtea.herokuapp.com/addStaff/
   ```
6. post clear staffs data
	>method: POST <br />
	param: None <br />
	return: To be discussed
   
   ```
   http://gongtea.herokuapp.com/clearStaffs/
   ``` 
7. post submission data from customer
	>method: POST <br />
	param: json <br />
	return: To be discussed <br />
	example: content-type: application/json; request body:
	
	```
	{"customerInfo":{
		"customerId":"hardcoded", 
		"deviceId":"<1333 3434 4343>"
		}, 	
	"productInfo":{
		"productId":1, 
		"addonId":2
		},
	orderInfo:{
			orderId:"",//by first time generated, it is null
			orderPrcessingTime:"", //by first time generated, it is null
			orderCollectionPlace:"hardcoded", //this is generated when customer select the staff place
			orderPrice:""
		}
	}
	```
   
   ```
   http://gongtea.herokuapp.com/submit/
   ``` 
8. The notification to Staff end when backend processed submission <br />
	The format, and the key is "order"
	
	``` 
	{
		orderInfo:{
			orderId:"11", //backend generates the orderId
			orderPrcessingTime:"", //by first time generated, it is null
			orderCollectionPlace:"hardcoded",
			orderPrice:"10" //backend generates the price
		},
		customerInfo:{
			customerId:"hardcoded",
			deviceId:"<hashed code>"
		},
		productInfo:{
			productId:1,
			addonId:2
		}
	}
	```
9. post confirmation to backend after Staff end processed the order, same format with information fulfulled.
	>method: POST <br />
	param: json <br />
	return: send notification to customer
	
	``` 
	{
		orderInfo:{
			orderId:"111",
			orderPrcessingTime:"3 mins", //this is determined by staff
			orderCollectionPlace:"hardcoded", 
			orderPrice:"10"
		},
		customerInfo:{
			customerId:"hardcoded",
			deviceId:"<hashed code>"
		},
		productInfo:{
			productId:1,
			addonId:2
		}
	}
	```
	
	```
	http://gongtea.herokuapp.com/confirm/
	```
10. The notification to Customer end when backend processed confirmation <br />
	The format, and key is "confirmation"
	
	```
	{
		orderInfo:{
			orderId:"111",
			orderPrcessingTime:"3 mins",
			orderCollectionPlace:"hardcoded",
			orderPrice:"10"
		},
		productInfo:{
			productId:1,
			addonId:2
		}
	}
	```
