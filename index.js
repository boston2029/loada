const ytdl = require("ytdl-core");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/video/:url", (req, res) => {
  console.log("yes");
  res.setHeader("Content-Type", "video/mp4");
  ytdl("https://www.youtube.com/watch?v=" + req.params.url, {
    filter: "audioandvideo"
  }).pipe(res)
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app
