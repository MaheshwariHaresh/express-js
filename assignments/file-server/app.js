const express = require("express");
const path = require("path");
const app = express();

const rootDirectory =
  "C:/Users/hares/Desktop/expressjs/Assignments/fileServerWithExpress";
app.get("/", (req, res) => {
  res.sendFile(path.join(rootDirectory, "index.html"), (error) => {
    if (error) {
      console.error("Error sending index.html" + error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("index file sent");
    }
  });
});

app.get("/:filename", (req, res) => {
  const filename = req.params.filename + ".html";
  const options = {
    root: rootDirectory,
    dotfiles: "deny",
    headers: {
      "x-timestamp": Date.now(),
      "x-sent": true,
    },
  };
  res.sendFile(filename, options, (error) => {
    if (error) {
      console.error("file not found, sending page not found.html", error);
      res.status(404).sendFile(path.join(rootDirectory, "pageNotFound.html"));
    } else {
      console.log(`${filename} sent successfully`);
    }
  });
});

app.listen(8080, () => {
  console.log("server running on port 8080");
});
