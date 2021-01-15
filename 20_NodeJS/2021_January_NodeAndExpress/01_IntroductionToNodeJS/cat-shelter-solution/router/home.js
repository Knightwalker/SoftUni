import url from "url";
import { promises as fs } from "fs";
import { fileURLToPath } from "url"; 
// import cats from "../data/cats.json";

const getHomePage = async (req, res) => {
    const filePath = fileURLToPath(new url.URL("../views/home/index.html", import.meta.url));
    const data = await fs.readFile(filePath);

    res.writeHead(200, "OK", {
      "Content-Type": "text/html",
      "Content-Length": data.length
    });

    res.end(data);
}

const getStaticFile = async (req, res) => {
  
}

export { getHomePage };