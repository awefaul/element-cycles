var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req, res){
	
//  console.log(`${req.method} request for ${req.url}`);
  var diePad = path.join(__dirname, req.url);
 // console.log("die pad: " + diePad);	
 if(req.url === "/"){ 
	fs.readFile("index.html", "UTF-8", function(err, html){		
	  res.writeHead(200, {"Content-Type": "text/html"})
	  res.end(html);	
	}) 
 } else if (req.url.match(/.css$/)){
	 var cssPath = path.join(__dirname, req.url);
	 var fileStream = fs.createReadStream(cssPath, 'UTF-8');	 
	 res.writeHead(200, {'Content-Type': 'text/css'});
	 fileStream.pipe(res);		 
 } else if (req.url.match(/.js$/)){
	 var jsPath = path.join(__dirname, req.url);
	 var fileStream = fs.createReadStream(jsPath, 'UTF-8');	 
	 res.writeHead(200, {'Content-Type': 'text/css'});
	 fileStream.pipe(res);
 } else if (req.url.match(/.png$/)){
	 var imgPath = path.join(__dirname, req.url);
	 var imgStream = fs.createReadStream(imgPath);
	 res.writeHead(200, {'Content-Type': 'image/png'});
	 imgStream.pipe(res);	 
 }else{
	 res.writeHead(404,{"Content-Type": "text/plain"});
	 res.end("404 kry nie file in app");
 }	
	
}).listen(8080);


console.log("Listening on port 8080");