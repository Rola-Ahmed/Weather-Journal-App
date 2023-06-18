"use strict";
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
console.log(`new date ${newDate}`);

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", performAction);

//const c = async

//Function 1
//how to get data from opeanweater
async function performAction(e) {
  const zipCodeElement = document.getElementById("zip").value;
  const FeelingsElement = document.getElementById("feelings").value;
  const apiKey = "a9de2f4e9d79dd9b4df1e60f824ced20&units=imperial";
  const baseURL = "http://api.openweathermap.org/data/2.5/weather?zip=";
  getWeather(baseURL, zipCodeElement, apiKey, FeelingsElement);
}

//Function 2
// GET request to external weather API
async function getWeather(url = "", zip = "", key = "", FeelingsElement = "") {
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
    // postData("/addWeatherDetails", { newDate, tempValue, FeelingsElement });
    console.log("2");
    //date: newDate,temperature: tempValue,feelings: FeelingsElement,
    // newDate, tempValue, FeelingsElement

    // postData("/addWeatherDetails", {
    //   newDate,
    //   tempValue,
    //   FeelingsElement,
    // });

    console.log("5");

    let object = {
      date: newDate,
      temperature: tempValue,
      feelings: FeelingsElement,
    };
    let x, y, z;
    x = object.date;
    y = object.tempElement;
    z = object.feelings;

    postData("/addWeatherDetails", {
      date: newDate,
      temperature: tempValue,
      feelings: FeelingsElement,
    });

    //  return weatherDataResponce;
    return weatherDataResponce;
  } catch (err) {
    console.log("Error:", err.message);
  }
}

// let object = {
//   date: 1,
//   temperature: "tempValue",
//   feelings: "FeelingsElement",
// };
// postData("/addWeatherDetails", object);

async function postData(url, data = {}) {
  console.log(`url ${url}`);
  // console.log(`data ${data}`);
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": " application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
  console.log(data);
  console.log(response);
  try {
    /* const newData = await response.json();
    console.log(newData);
    // return newData;*/
  } catch (error) {
    console.log("error", error);
  }
}

//     // postData("/addWeathe rDetails", { newDate, tempValue, FeelingsElement });
//     console.log("2");
//     //date: newDate,temperature: tempValue,feelings: FeelingsElement,
//     // newDate, tempValue, FeelingsElement

//     // postData("/addWeatherDetails", {
//     //   newDate,
//     //   tempValue,
//     //   FeelingsElement,
//     // });

//     console.log("5");

//     return weatherDataResponce;
//   } catch (err) {
//     console.log("Error:", err.message);
//   }
// };

// const postData = async (url = "", data = {}) => {
//   //step 2
//   //save the data in your application
//   //"/addWeatherDetails"
//   const response = await fetch(url, {
//     method: "POST",
//     //mode: "cors", // no-cors, *cors, same-origin
//     // cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     // port: 5000,
//     credentials: "same-origin",
//     headers: {
//       "Content-Type": "application/json",

//       // "Access-Control-Allow-Origin": "*",
//       // Accept: "application/json",
//       // "Access-Control-Allow-Origin": "*",
//       // "Access-Control-Allow-Headers":
//       //   "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//       // "Access-Control-Request-Method": "GET, POST, DELETE, PUT, OPTIONS",
//     },
//     body: JSON.stringify(data),
//   });
//   // console.log("response.body");
//   if (!response.ok) {
//     console.log("errrrror");
//     console.log(await response.description);
//   }
//   const dataaa = await response.json();
//   console.log(dataaa);
// };

// const getData = async (url = "") => {
//   const request = await fetch(url);
//   try {
//     // Transform into JSON
//     const allData = await request.json();
//   } catch (error) {
//     console.log("error", error);
//     // appropriately handle the error
//   }
// };

///*"start": "nodemon server.js"*/
