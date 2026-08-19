let http = require("http");
let server = http.createServer(function (req, res) {
  let opcao = req.url;
  if (opcao == "/historia") {
    res.end("<html><body><h1>Historia</h1></body></html>");
  } else if (opcao == "/cursos") {
    res.end("<html><body><h1>Cursos</h1></body></html>");
  } else if (opcao == "/professores") {
    res.end("<html><body><h1>Professores</h1></body></html>");
  } else {
    res.end("<html><body><h1>404</h1></body></html>");
  }
});

server.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
