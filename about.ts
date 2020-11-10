const http = require('http')
const fs = require('fs')

console.log('server started et : http://localhost:3000/')
http.createServer((req,res) => {
    if (req.url==='/') 
fs.readFile(process.cwd() + '/index.html', 'utf8', (error,data)=>{
      if (error)  throw  error
             res.writeHead(200,{'Content-Type':'text/html'})
                  res.end(data)
}); else
    if (req.url==='/index.html') 
fs.readFile(process.cwd() + '/index.html', 'utf8', (error,data)=>{
      if (error)  throw  error
             res.writeHead(200,{'Content-Type':'text/html'})
                  res.end(data)
})
else
if (req.url==='/agu') 
            fs.readFile(process.cwd() + '/Agu/agu.html', 'utf8', (error , data)=>{
                  if (error)  throw  error
                         res.writeHead(200,{'Content-Type':'text/html'})
                              res.end(data)
})
else
if (req.url==='/Agu/core/template/css/style4agu.css') 
fs.readFile(process.cwd() + '/Agu/core/template/css/style4agu.css', 'utf8', (error,data)=>{
    if (error)  throw  error
          res.writeHead(200,{'Content-Type':'text/css'})
        res.end(data)
})

//___________________________________________________________________
else  if(req.url === '/Agu/core/template/img/img1.jpg')
    fs.readFile(process.cwd() + '/Agu/core/template/img/img1.jpg',(error , data) =>{
        if (error) throw error
            res.writeHead(200,{'Content-Type':'text/jpg'})
            res.end(data)
    })
    else  if(req.url === '/Agu/core/template/img/123.png')
    fs.readFile(process.cwd() + '/Agu/core/template/img/123.png',(error , data) =>{
        if (error) throw error
            res.writeHead(200,{'Content-Type':'text/png'})
            res.end(data)
    })
else 

fs.readFile(process.cwd() + '/404.html', 'utf8', (error , data) =>{
    if (error)  throw  error
    res.writeHead(200,{'Content-Type':'text/html'})
         res.end(data)
})

}).listen(3000)

