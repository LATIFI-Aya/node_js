const http = require ('http');
const server = http.createServer((req , res) => {
    res.end('<h1>Hello Node!!!!</h1>\n')
});
server.listen(3000, '127.0.0.1' , () =>{
    console.log('server running ....')
})