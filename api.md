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
3. post submission data from custer
	>method: POST <br />
	param: json <br />
	return: To be discussed
	example: content-type: application/json; request body: {"product":1, "addons":2}
   
   ```
   http://gongtea.herokuapp.com/submit/
   ``` 
