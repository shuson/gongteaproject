#APIs for RESTful call

1. get all products list
	>param: None <br />
	return: json
	
	```
	http://gongtea.herokuapp.com/products/
	```
	
2. get addons list by product pid
   >param: pid <br />
   return: json
   
   ```
   http://gongtea.herokuapp.com/addons/pid/
   ```
3. post submission data from custer
   >param: json exmple:{"product":1, "addons":2}<br />
   return: To be discussed
   
   ```
   http://gongtea.herokuapp.com/submit/
   ``` 