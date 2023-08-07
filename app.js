const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
  if (req.url === "/path") {
    res.write("second page");
    res.end();
  }
});

server.listen(3000);
