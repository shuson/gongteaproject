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
3. post submission data from customer
	>method: POST <br />
	param: json <br />
	return: To be discussed <br />
	example: content-type: application/json; request body: {"product":1, "addons":2}
   
   ```
   http://gongtea.herokuapp.com/submit/
   ``` 
4. post add customer data to register device id
	>method: POST <br />
	param: json <br />
	return: To be discussed <br />
	example: content-type: application/json; request body: {"name":"Kyle", "deviceId":'12345-67890'}
   
   ```
   http://gongtea.herokuapp.com/addCustomer/
   ``` 
5. post clear customers data
	>method: POST <br />
	param: None <br />
	return: To be discussed
   
   ```
   http://gongtea.herokuapp.com/clearCustomers/
   ``` 
6. post add staff data to register device id
	>method: POST <br />
	param: json <br />
	return: To be discussed <br />
	example: content-type: application/json; request body: {"name":"Kyle", "deviceId":'12345-67890'}
   
   ```
   http://gongtea.herokuapp.com/addStaff/
   ```
7. post clear staffs data
	>method: POST <br />
	param: None <br />
	return: To be discussed
   
   ```
   http://gongtea.herokuapp.com/clearStaffs/
   ``` 