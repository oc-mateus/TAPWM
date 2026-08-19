function Parte1() {
  for (let i = 1; i <= 10; i++) {
    console.log("Primeira Parte: " + i);
  }
}

setTimeout(Parte1, 2000);

const fs = require("fs").promises;
fs.readFile("file.txt", "utf-8")
  .then((data) => {
    const registros = data.split("\n");
    registros.forEach((registro, index) => {
      console.log("Segunda Parte " + index + " " + registro);
    });
  })
  .catch((err) => {
    console.error("Erro: " + err);
  });
