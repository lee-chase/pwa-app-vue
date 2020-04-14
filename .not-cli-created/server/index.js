const express = require("express");
const app = express();
const port = 5001;
const url = require("url");

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

app.use(express.static("served"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/article/:id", (req, res) => {
  res.send({
    msg: `You requested article: ${req.params.id}`,
    article: {
      text: `Your article: ${req.params.id}`,
      img: url.format({
        protocol: req.protocol,
        host: req.get("host"),
        pathname: `_data/articles/${req.params.id}.jpg`
      })
    }
  });
});

// eslint-disable-next-line
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
