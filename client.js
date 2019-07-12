const soap = require('soap');
const url = "http://localhost:8000/helloservice?wsdl";
let args = {name:"test"};

soap.createClient(url,function(err,client) {
	//console.log(err);
	if(err){
		console.log("error occured ", err)
	}else{
		client.sayHello(args,function(err,result) {
	    	console.log(result);
	    	console.log(client.describe());
  		});
	}
  
});