const express = require("express");
const app = express();

// Query params = ?teste=1 (sempre aparece no URL do navegador)
// Route Params = /users/1 (1 é o ID do usuario)
// Request body = {"name": "Jean", "email":"jean@jean.com"}

app.get("/teste", (res, req) => {
  return req.send("Hello Worlddddd");
});

app.listen(3000);
