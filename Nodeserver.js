import module from 'module'
import nodemon from 'nodemon Nodeserver'

http.createServer(function(req,res){
    res.write("hi welcome")
    res.end()
}).listen(5000)