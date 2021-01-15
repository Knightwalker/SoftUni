import http from "http";
import url from "url";
import router from "./router/index.js";

const port = 3000;

const server = http.createServer((request, responce) => {
  const objUrl = new url.URL(request.url, "http://localhost");
  const pathname = objUrl.pathname;
  const method = request.method.toLowerCase();

  console.log(method);
  
  if (pathname === "/" && method === "get") {
    router.getHomePage(request, responce);
  } else if (pathname.startsWith("/content/") && method === "get") {

  } else {
    const data = "<h1>NOT FOUND</h1>";

    responce.writeHead(404, "NOT FOUND", {
      "Content-Type": "text/html",
      "Content-Length": data.length
    });

    responce.end(data);
  }

});

server.listen(port, () => {
  console.log(`server listening at port ${port}`);
});