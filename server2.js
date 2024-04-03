//criando um servidor com resposta de uma pagina html

const http = require("http");
const fs = require('fs');
let porta = 3000;
let host = "localHost";

const server = http.createServer((req,res)=>{
    //header
    res.setHeader('content-type','text/html');
    fs.readFile('index.html',(erro,info)=>{
        if(erro){
            console.log("erro encontrado");
            res.write("Pagina não foi possivel ser carregada amigo");
            res.end();
        } else {
            res.write(info);
            res.end();
        }
    });
});

server.listen(porta,host,()=>{
    console.log('Trabalhos iniciados');
})