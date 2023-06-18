//"use strict";
//const bodyParser = require("body-parser"); //by5od body y7wlo li json
/* Global Variables */
// Personal API Key for OpenWeatherMap API
//Notice the last part ‘&units=imperial’-- this should be included in the saved variable.

//const { response } = require("express");

//let url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCodeElement}&appid=${apiKey}`;

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

generateButton.addEventListener("click", performAction);

//const c = async

//how to get data from opeanweater
async function performAction(e) {
  const zipCodeElement = document.getElementById("zip").value;
  const FeelingsElement = document.getElementById("feelings").value;
  const apiKey = "a9de2f4e9d79dd9b4df1e60f824ced20&units=imperial";
  const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  getWeather(baseURL, zipCodeElement, apiKey, FeelingsElement);
}
// GET request to external weather API
const getWeather = async (
  url = "",
  zip = "",
  key = "",
  FeelingsElement = ""
) => {
  const apiResponse = await fetch(`${url}${zip}&appid=${key}`);
  // .then((res) => res.json());
  try {
    const weatherDataResponce = await apiResponse.json();

    console.log(weatherDataResponce);
    const humidityValue = await weatherDataResponce.main.humidity;
    const pressureValue = await weatherDataResponce.main.pressure;
    const tempValue = await weatherDataResponce.main.temp;
    const name = await weatherDataResponce.name;
    const country = await weatherDataResponce.sys.country;
    console.log(humidityValue);
    console.log(pressureValue);
    console.log(tempValue);
    console.log(name);
    console.log(country);
    console.log("1");
    console.log(`${newDate}, ${tempValue}, ${FeelingsElement}`);
    // postData("/addWeathe rDetails", { newDate, tempValue, FeelingsElement });
    console.log("2");
    //date: newDate,temperature: tempValue,feelings: FeelingsElement,
    // newDate, tempValue, FeelingsElement
    return (
      weatherDataResponce,
      console.log("3"),
      postData("/addWeatherDetails", {
        date: newDate,
        temperature: tempValue,
        feelings: FeelingsElement,
      }),
      console.log("4")
    );
  } catch (err) {
    console.log("Error:", err.message);
  }
};

const postData = async (url = "", data = {}) => {
  //step 2
  //save the data in your application
  //"/addWeatherDetails"
  const response = await fetch(url, {
    method: "POST",
    //mode: "cors", // no-cors, *cors, same-origin
    // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    // port: 5000,
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    //redirect: "follow", // manual, *follow, error
    //referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-
    // { newDate, tempValue, FeelingsElement }
    body: JSON.stringify(data),
  });
  console.log("response.body");
  console.log(response.body);

  console.log(response);

  const resultData = await fetch("/getWeatherDetails").then((res) =>
    res.json()
  );
  document.getElementById("data").innerHTML = resultData.date;
  document.getElementById("content").innerHTML = resultData.feelings;
  document.getElementById("temp").innerHTML = resultData.temperature;

  try {
    const newData = await response.json();
    console.log(newData);
    // return newData;
  } catch (error) {
    console.log(error);
    console.log(response);
  }
};

const getData = async (url = "") => {
  const request = await fetch(url);
  try {
    // Transform into JSON
    const allData = await request.json();
  } catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
};
