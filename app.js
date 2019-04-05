const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
   // console.log("req = "+req.url);
  
    var url = req.url.toString();
    var s = url.split('/');
   
 
    if(req.url=== '/'){
        // res.writeHead(200, {'content-type' : 'text/html'});
        //  res.end('<h1>This is index.html</h1>');       
        
        fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
            if(err) throw err;
            //res.writeHead(200, {'content-type' : 'text/html'});
            res.end(content);
        });

    }
    else if(s[1] === 'img'){
        // console.log(s);
         console.log(req.url);
         // console.log(__dirname.toString()+" "+s[1]+" "+s[2]);
         var i = path.join(__dirname,'img',s[2]);
         console.log(i);
         //console.log(req.url);
        fs.readFile(
            path.join(__dirname,'img',s[2]),
            (err,content)=>{
            if(err) throw err;
            res.writeHead(200,{'content-type':'jpg/html'});
                  
            res.end(content);
         }
        );
 
     }
    else if(req.url=== '/index.html'){
        fs.readFile(path.join(__dirname,'index.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200, {'content-type' : 'text/html'});
            res.end(content);
        });
    }
    else if (req.url === '/Gallery.html'){
        fs.readFile(path.join(__dirname,'Gallery.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200, {'content-type' : 'text/html'});
            res.end(content);
        });
    }else if (req.url=== '/Contact.html'){
        fs.readFile(path.join(__dirname,'Contact.html'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200, {'content-type' : 'text/html'});
            res.end(content);
        });

    }else if(req.url=== '/assets/css/main.css'){
        fs.readFile(path.join(__dirname,'assets','css','main.css'),(err,content)=>{
            if(err) throw err;
            res.writeHead(200, {'Content-Type' : 'text/css'});
            res.end(content);
        });

        //รูปไม่ออก 
  
    }else{
        
          res.writeHead(404, {'content-type' : 'text/html'});
          res.end('<h1> Error 404 not found !!! </h1>');

        // fs.readFile(path.join(__dirname,'public','404.html'),(err,content)=>{
        //     if(err) throw err;
        //     res.writeHead(200, {'content-type' : 'text/html'});
        //     res.end(content);
        // });
    }
});

const PORT = process.env.PORT || 5500 ;
server.listen(PORT, ()=> {
    console.log('Server is runing on port:'+PORT);
});