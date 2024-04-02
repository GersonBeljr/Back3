//criando um servidor web usando node
const http = require('http');

const server = http.createServer((request,response)=>{
    console.log("Efetuando o pedido");
    response.setHeader('Content-type',"text/html")
    response.write("<h1>teste 1</h1>");
    response.write("<h2>teste 2</h2>");
    response.write("<h3>teste 3</h3>");
    //response.write("<h1>VAI CHUPAR UM CU ALALAL</h1>");
    response.end();
})

server.listen(3000,"localHost",()=>{
    console.log("Servidor iniciado");
})