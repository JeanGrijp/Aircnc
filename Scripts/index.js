const express = require("express");
const server = express();

// Query params = ?teste=1 (sempre aparece no URL do navegador)
// Route Params = /users/1 (1 é o ID do usuario)
// Request body = {"name": "Jean", "email":"jean@jean.com"}

server.get("/teste", (res, req) => {
  return req.send("Hello World");
});

server.listen(3000);
