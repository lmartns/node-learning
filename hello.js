const http = require("http");
const fs = require("fs");

http
  .createServer(function (req, res) {
    let name = require("url").parse(req.url, true).query.name;

    if (name === "charmander") {
      const file = "charmander";

      fs.stat(file, function (err, stat) {
        if (err) {
          console.log(err);
          res.writeHead(200, { "Content-Type": "text/plain" });
          res.end("Sorry, charmander not is here");
        } else {
          const img = fs.readFileSync(file);
          res.contentType = "image/jpeg";
          res.contentLength = stat.size;
          res.end(img, "binary");
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello " + name + "\n");
    }
  })
  .listen(8124);
const port = 8124;
console.log("server running on port: " + port);
