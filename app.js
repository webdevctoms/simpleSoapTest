const http = require('http');
const soap = require('soap');

let helloService = {
	HelloService:{
		HelloPort:{
			sayHello: function(args){
				return{
					message: "Hello " + args.name
				}
			}
		}
	}
};

let xml = require('fs').readFileSync('helloService.wsdl','utf-8');

let server = http.createServer(function(req,res){
	res.end("404: not found " + req.url);
});

server.listen(8000);

let soapServer = soap.listen(server,'/helloservice',helloService,xml);
soapServer.log = function(type, data) {
    // type is 'received' or 'replied'
    console.log('Type: ' + type + ' data: ' + data);
};
//console.log("test");