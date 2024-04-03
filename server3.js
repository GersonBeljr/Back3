//criando um sistema de rotas e status code

const http = require('http');
const fs = require('fs');
let porta = 3000;
let host = 'localHost';

const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');

    //rotas

    let html_page = "";

    switch (req.url) {
        case "/":
            html_page = "home.html"
            res.statusCode = 200;
            break;
        case "/home":
            html_page = "home.html"
            res.statusCode = 200;
            break;
        case "/servicos":
            html_page = "servicos.html"
            res.statusCode = 200;
            break;
        case "/oil":
            html_page = "index.html"
            res.statusCode = 200;
            break;
        default:
            html_page = "404.html"
            res.statusCode = 404;
            break;
    }

    fs.readFile('./Main/'+html_page,(erro,data)=>{
        if(erro){
            console.log("erro encontrado");
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
})




server.listen(porta, host, () => {
    console.log('Trabalhos iniciados');
})