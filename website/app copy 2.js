//"use strict";
//const bodyParser = require("body-parser"); //by5od body y7wlo li json
/* Global Variables */
// Personal API Key for OpenWeatherMap API
//Notice the last part ‘&units=imperial’-- this should be included in the saved variable.
const apiKey = "a9de2f4e9d79dd9b4df1e60f824ced20&units=imperial"; //

//https://api.openweathermap.org/data/2.5/weather?zip='900089'&appid="a9de2f4e9d79dd9b4df1e60f824ced20&units=imperial"'

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
console.log(`new date ${newDate}`);

const dateElement = document.getElementById("date");
const tempElement = document.getElementById("temp");
const contentElement = document.getElementById("content");
const generateButton = document.getElementById("generate");
//const zipCodeElement = document.getElementById("zip").value;

//const FeelingsElement = document.getElementById("feelings").value;
/*console.log(`zip code ${zipCodeElement},, `);
console.log(typeof zipCodeElement);
console.log(`feling ${FeelingsElement},, `);
console.log(document.getElementById("zip").value);*/

//once the user click the button i must call the url
/*generateButton.addEventListener("click", async () => {
  const zipCodeElement = document.getElementById("zip").value;

  const FeelingsElement = document.getElementById("feelings").value;

  //got to openWeatherMap get the Url for zip code
  //build a get request  API by ZIP CODE
  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeElement}&appid=${apiKey}`;
  //const response = await fetch(url).then((res) => res.json());
  const response = await fetch(url); //.then((res) => res.json());
  //  const temp = await response.main.temp;
  console.log(`response ${response}`);
  // console.log(`temp ${temp}`);
}); */

generateButton.addEventListener("click", performAction);

//const c = async

//how to get data from opeanweater
async function performAction(e) {
  const zipCodeElement = document.getElementById("zip").value;
  const FeelingsElement = document.getElementById("feelings").value;
  console.log(`zip code ${zipCodeElement} `);
  let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeElement}&appid=${apiKey}`;

  // getAnimalDemo(baseURL,newAnima l, apiKey)
  //const res = await fetch(url);
  const response = await fetch(url).then((res) => res.json());
  console.log(response);
  try {
    // const data = await res.json();
    //console.log(data);

    //step 1
    //get the data u want
    const humidityValue = await response.main.humidity;
    const pressureValue = await response.main.pressure;
    const tempValue = await response.main.temp;
    const name = await response.name;
    const country = await response.sys.country;
    console.log(humidityValue);
    console.log(pressureValue);
    console.log(tempValue);
    console.log(name);
    console.log(country);

    //step 2
    //save the data in your application
    let stepTwo = await fetch("/addWeatherDetails", {
      method: "POST",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // port: 5000,
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-
      body: JSON.stringify({ newDate, tempValue, FeelingsElement }),
    });
    console.log(stepTwo);

    stepTwo.then(console.log(` ${newDate}, ${tempValue}, ${FeelingsElement}`));
    console.log(stepTwo);
  } catch (error) {
    console.log("error", error);
  }
}

//c();
