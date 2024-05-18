/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Siddhant Koirala Student ID: 143443232 Date: 5/18/2024
*
********************************************************************************/

var serverVerbs =  ["GET","GET","GET","POST","GET","POST"]
var serverPaths =  ["/","/about","/contact","/login","/panel","/logout"]
var serverResponses = [
    "Welcome to WEB700 Assignment1",
    "This assignment was prepared by Siddhant",
    "Siddhant:skoirala13@myseneca.ca",
    "User Logged In",
    "Main Pannel",
    "Logout Complete"]


function httpRequest(verb,path) {
    for(let i=0;i<serverPaths.length;i++){
        if( serverVerbs[i]===verb && serverPaths[i]===path){
        return '200: '+ serverResponses[i]
        } 
        }
        return `404: Unable to process ${verb} request for ${path}`;
    }
console.log(httpRequest("GET","/"))
console.log(httpRequest("GET","/about"))
console.log(httpRequest("PUT","/"))

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function automateTests() {
   testVerbs = ["GET","GET","GET","POST","GET","POST"]
   testPaths =  ["/","/about","/contact","/login","/panel","/logout"]

  function randomRequests () {
    randVerb = testVerbs[getRandomInt(testVerbs.length)]
    randPath = testPaths[getRandomInt(testPaths.length)]
    console.log(httpRequest(randVerb,randPath))
}
setInterval(randomRequests, 1000)
}

automateTests()
