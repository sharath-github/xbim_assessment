const express = require("express");
const app = express();
const port = 5000;
const routes = require("./routes")
const path = require("path");
  
async function start() {
  routes.setup(app); 

  app.use(express.static(path.join(__dirname, "static_files"))); 

  app.listen(port, () =>
    console.log(`listening on port ${port}!`)
  );
}


start();
