import {
  Value,
  Liquid,
  TagToken,
  Context,
  Emitter,
  Tag,
  TopLevelToken,
} from "liquidjs";
import header from "./ts/layouts/header";
import * as path from "node:path";
import * as http from "node:http";
import products from "./products";
import * as fs from "node:fs";
import titleComponent from "./ts/components/titleComponent";

const engine = new Liquid({
  root: path.resolve(__dirname, "liquid"),
  extname: ".liquid",
});

engine.registerTag(
  "header",
  class HeaderTag extends Tag {
    private value: Value;
    constructor(
      token: TagToken,
      remainTokens: TopLevelToken[],
      liquid: Liquid,
    ) {
      super(token, remainTokens, liquid);
      this.value = new Value(token.args, liquid);
    }
    *render(ctx: Context, emitter: Emitter) {
      const title = yield this.value.value(ctx);
      emitter.write(header(title));
    }
  },
);

engine.registerTag(
  "title",
  class TitleTag extends Tag {
    private value: Value;
    constructor(
      token: TagToken,
      remainTokens: TopLevelToken[],
      liquid: Liquid,
    ) {
      super(token, remainTokens, liquid);
      this.value = new Value(token.args, liquid);
    }
    *render(ctx: Context, emitter: Emitter) {
      const landingTitle = yield this.value.value(ctx);
      emitter.write(titleComponent(landingTitle));
    }
  },
);

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.method === "GET" && req.url?.startsWith("/css/")) {
    console.log("into it");
    const filePath = path.join(__dirname, "public", req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Not Found");
      } else {
        res.setHeader("Content-Type", "text/css");
        res.end(data);
      }
    });
    return;
  }

  if (req.method === "GET" && req.url?.startsWith("/assets/")) {
    console.log("into it");
    const filePath = path.join(__dirname, "public", req.url);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end("Not Found");
      } else {
        res.setHeader("Content-Type", "image/jpg");
        res.end(data);
      }
    });
    return;
  }

  if (req.method == "GET" && req.url == "/products") {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(products));
  }

  if (req.method == "GET" && req.url == "/") {
    const scope = {
      title: "Chez Bobo",
      landingTitle: "Chez Bobo | DataStore",
    };

    engine.renderFile("landing", scope).then((result) => {
      res.setHeader("Content-Type", "text/html");

      res.statusCode = 200;
      res.end(result);
    });
  }

    if (req.method == "GET" && req.url == "/menu") {
      const scope = {
        title: "Chez Bobo",
        menuTitle: "Chez Bobo | Menu",
        products: products
      };

      engine.renderFile("menu", scope).then((result) => {
        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.end(result);
      });
    }
});

server.on("connection", (stream) => {
  console.log("someone is connecting");
});

server.listen(3000, () => {
  console.log("listening on port: 3000");
});
