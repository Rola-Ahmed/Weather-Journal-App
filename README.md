## Weather-Journal App project from Udacity

This Project build's an asynchronous web application that uses user data and Web API to dynamically refresh the user interface for a weather-journal app.
<br />

## Table of Contents

-Server Folder
server.js

-Website Folder
index.html
app.js
style.css
README.md file

## Usage

1- through GitHub, you can preview the project by downloading a zip file of this project or extracting it, or cloning the repository.
2- try use VS Code or Notepad or Brackets to edit the files.
3-You must download npm and Node.js inorder to run the code
4- Through command line download the following dependencies in your project
npm install init //to download the package.json file that contains the project detials and dependecies
npm install express
npm install cors
npm install body-parser
5-then write in the terminal node server/server.js
6-then write localhost::port-number on the browser

## Project Environment Setup

I used VS Code
1- Node and Express Environment:
Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.

The Express app instance should be pointed to the project folder with .html, .css, and .js files.

2- Project Dependencies:
The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

3- How to install the project dependecies? through command line,
npm install init //to download the package.json file that contains the project detials and dependecies
npm install express
npm install cors
npm install body-parser

4- Create API credentials on OpenWeatherMap.com
1- first create an account on OpenWeatherMap.com
2- subscribe to current weather detials inorder to recive the api key
3-Copy the URL where u get Built-in API request by ZIP code.
4- The following should be in the app,js file:
// Personal API Key for OpenWeatherMap API
const apiKey = '<your_api_key>&units=imperial';
Notice the last part ‘&units=imperial’-- this should be included in the saved variable.

---

## APIs and Routes

1- APP API Endpoint:
There should be a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.

    Tip: Near the top of the file server.js there should be a line of code that creates an empty JavaScript object:

    projectData = {
    }

2- Integrating OpenWeatherMap API:
The personal API Key for OpenWeatherMap API is saved in a named const variable.
The API Key variable is passed as a parameter to fetch().
Data is successfully returned from the external API.

In the file app.js, there should be a line of code near the top:

3- Return Endpoint Data && GET Route I: Server Side:
There should be a GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

4- Return Endpoint Data && GET Route II: Client Side:
There should be an asynchronous function to fetch the data from the app endpoint

POST Route

You should be able to add an entry to the project endpoint using a POST route setup on the server side and executed on the client side as an asynchronous function.

The client side function should take two arguments, the URL to make a POST to, and an object holding the data to POST.

## Dynamic UI

1- AT the HTML, the user should enter zip code and enter their feelings in the required Input field, then click the button for Interaction

    The input element with the placeholder property set to “enter zip code here” should have an id of zip.
    The textarea included in project HTML should have an id of feelings.
    The button included in project HTML should have an id of generate.

2- Assigning Element Properties Dynamically:
The div with the id, entryHolder should have three child divs with the ids:

    date
    temp
    content

3- Event Listeners:
Adds an event listener to an existing HTML button from DOM using JS.

In the file app.js, the element with the id of generate should have an addEventListener() method called on it, with click as the first parameter, and a named callback function as the second parameter.

4-When clicking on the button the data element, temp element, content element should display the output
