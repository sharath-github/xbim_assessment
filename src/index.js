const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const routes = require("./routes")
const path = require("path");
  
async function start() {
  routes.setup(app); 

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, "static_files"))); 

  app.listen(port, () =>
    console.log(`listening on port ${port}!`)
  );
}


start();
