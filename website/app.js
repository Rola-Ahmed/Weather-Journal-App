"use strict";
/*const x = { 1: 2, 2: 2, 3: 4 };
console.log(x);*/

let d = new Date();
let newDate =
  d.getMonth() +
  1 +
  "/" +
  d.getDate() +
  "/" +
  d.getFullYear() +
  " Time " +
  d.getHours() +
  ":" +
  d.getMinutes() +
  ":" +
  d.getSeconds();
/*let newDate =
  d.getMonth() +
  "." +
  d.getDate() +
  "." +
  d.getFullYear() +
  " Time " +
  d.getHours() +
  ":" +
  d.getMinutes() +
  ":" +
  d.getSeconds();*/
console.log(`new date ${newDate}`);

const generateButton = document.getElementById("generate");
generateButton.addEventListener("click", performAction);

//const c = async

//Function 1
//how to get data from opeanweater
async function performAction(e) {
  const zipCodeElement = document.getElementById("zip").value;
  const FeelingsElement = document.getElementById("feelings").value;

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
    console.log(
      `${newDate}, ${tempValue}, ${FeelingsElement},${humidityValue},${pressureValue},${name},${country}`
    );
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

    const object = {
      date: newDate,
      temperature: tempValue,
      feelings: FeelingsElement,
      humidity: humidityValue,
      pressure: pressureValue,
      city: name,
      country: country,
    };
    /*let x, y, z;
    x = object.date;
    y = object.tempElement;
    z = object.feelings;*/
    console.log(object);
    // console.log(JSON.stringify(object));
    //let yy = Object.values(object);
    ///console.log(typeof yy);
    console.log(Object.values(object));
    postData("/addWeatherDetails", object);

    //  return weatherDataResponce;
    return weatherDataResponce;
  } catch (err) {
    console.log("Error:", err.message);
  }
}

async function postData(url, data = {}) {
  //console.log(`url ${url}`);  ////uncomment
  console.log(data);
  const response = await fetch(url, {
    method: "POST",

    credentials: "same-origin",
    headers: {
      "Content-Type": " application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
    /* cookies: browser.cookies.remove(
      data // object
    ),*/
  });
  //console.log(`data ${data}`);
  // console.log(`response ${response.json()}`); //response [object Promise]
  //response.then((res) => console.log(res.json()));
  //console.log(`response ${response}`);
  // const newData = await response.json();
  // console.log(newData);

  //  const resultData = await fetch("/getWeatherDetails").then((res) => res.jon());
  // console.log(resultData);

  //step 3
  if (response.ok) {
    console.log(await response);
    console.log(`response ${response.status}`);
    console.log("yess");
  } else {
    console.log("NO");
  }
  /*try {
    //step 3
    /*const resultData = await fetch("/getWeatherDetails").then((res) =>
      res.json()
    );
    console.log(resultData);

    document.getElementById("date").innerHTML = "date: " + resultData.date;
    document.getElementById("content").innerHTML =
      "how do you feel today!: " + resultData.feelings;
    document.getElementById("temp").innerHTML =
      "temperatur: " + Math.round(resultData.temperature) + " degrees";
    document.getElementById("humidity").innerHTML =
      "humidity " + resultData.humidity;
    document.getElementById("pressure").innerHTML =
      "pressure: " + resultData.pressure;
    document.getElementById("city").innerHTML = "city:" + resultData.city;
    document.getElementById("country").innerHTML =
      "country: " + resultData.country;
    //fetch();
    // return newData;
  } catch (error) {
    console.log("error", error);
  }*/

  const retrieveData = async () => {
    const request = await fetch("/getWeatherDetails");
    try {
      // Transform into JSON
      const resultData = await request.json();
      console.log(resultData);
      // Write updated data to DOM elements
      document.getElementById("date").innerHTML = "date: " + resultData.date;
      document.getElementById("content").innerHTML =
        "how do you feel today!: " + resultData.feelings;
      document.getElementById("temp").innerHTML =
        "temperatur: " + Math.round(resultData.temperature) + " degrees";
      document.getElementById("humidity").innerHTML =
        "humidity " + resultData.humidity;
      document.getElementById("pressure").innerHTML =
        "pressure: " + resultData.pressure;
      document.getElementById("city").innerHTML = "city:" + resultData.city;
      document.getElementById("country").innerHTML =
        "country: " + resultData.country;
    } catch (error) {
      console.log("error", error);
      // appropriately handle the error
    }
  };
  retrieveData();
}

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
