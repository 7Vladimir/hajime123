const http = require('http')
const fs = require('fs')
http.createServer((req,res)=>{

    if (req.url === '/')  {
    res.writeHead(200, "Content-Type", "text/html")
    fs.readFile('./public/text.txt','utf8', (err,content) => {
        if (err) throw err
        res.end(content)
    })
}
    else { 
        res.writeHead(404, "Content-Type", "text/html" )
        res.write('404 error')
        res.end()
    }
}).listen(3000)





