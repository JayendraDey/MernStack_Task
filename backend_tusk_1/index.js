import fs from "fs";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";

const PORT = 5000;
const hostName = "localhost";
const home = fs.readFileSync("./home.html", "utf-8");
const about = fs.readFileSync("./about.html", "utf-8");
const contact = fs.readFileSync("./contact.html", "utf-8");
const server = http.createServer((req, res) => {
  try {
    switch (req.url) {
      case "/": {
        return res.end(home);
      }
      case "/about": {
        return res.end(about);
      }
      case "/contact": {
        return res.end(contact);
      }
      default:
        return res.end("Error");
    }
  } catch (error) {
    console.log("error :", error);
  }
});

server.listen(PORT, "localhost", () => {
  console.log(`Server is working on port: ${PORT}`);
});
