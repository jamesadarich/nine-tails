import * as Express from "express";
import * as http from "http";

let app = Express();

app.set("port", process.env.PORT || 8080);
app.use(Express.static("./test/end-to-end/site"));
app.use("/node_modules", Express.static("node_modules"));
app.use("/nine-tails", Express.static("./js"));


http.createServer(app).listen(app.get("port"), () => {
  console.log("Express server listening on port " + app.get("port"));
});

//in case can't find path it's probably SPA so...
app.use(function(req: any, res: any, next: any) {
  res.status(200).sendFile("./test/end-to-end/site/index.html", { root: "./" });
});
