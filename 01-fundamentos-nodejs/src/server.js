import http from "http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "Jonny",
      email: "jonny@email.com.br",
    });
    return res.writeHead(201).end();
  }

  if (method === "PUT" && url === "/users") {
    return res.end("Atualização de Usuarios");
  }

  if (method === "PATCH" && url === "/users") {
    return res.end("Edição de informação especifica no Usuario");
  }

  if (method === "DELETE" && url === "/users") {
    return res.end("Remoção de Usuarios");
  }

  return res.writeHead(404).end();
});

// localhost:3333
server.listen(3333);
