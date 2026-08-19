let http = require("http");
let server = http.createServer(function (req, res) {
  res.end("<html><body><h1>ola mundo</h1></body></html>");
});

server.listen(3000, function () {
  console.log("Servidor rodando na porta 3000");
});
