// Setup empty JS object to act as endpoint for all routes
// created an object that acts as the app API endpoint
//projectData = {};
projectData = [];

// Require Express to run server and routes
//Project Dependencies
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser"); //by5od body y7wlo li json
//const fetch = require("node-fetch");

//to install the libraried
//npm intall  DependenciesName in the project through terminal

//const path=require("path");
//app.use(express.static(path.join(__dirname,'../website)));

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
app.use(cors({ origin: true }));
//app.use(fetch());
//app.use(restify.cors());

// Initialize the main project folder
// i have a folder(folder name website) that is static
//app.UseStaticFiles();
app.use(express.static("../website"));
console.log(express.static("../website"));
//  app.use(express.static("website"));

const port = 5000;
/* Spin up the server*/

const server = app.listen(port, listening);

function listening() {
  // console.log(server);
  console.log(`running on localhost: ${port}`);

  http: console.log(`running on http://localhost:${port}`);
}

console.log(app.post("/addWeatherDetails", AddWeather));

function AddWeather(req, res) {
  //save all the data i got from the url into projectData

  //0
  console.log(req.body);
  projectData = {
    date: req.body.newDate,
    temperature: req.body.tempValue,
    feelings: req.body.FeelingsElement,
  };

  //projectData = req.body;

  //projectData.push(newDataEntry);

  //projectData.push(req.body);
  //res.send(projectData);
  //res.end();
}

app.post("/addWeatherDetails", AddWeather);
