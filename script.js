// Write your JavaScript code here!
const {validateInput, myFetch, pickPlanet, addDestinationInfo, formSubmission} = require('./scriptHelper');

let list = document.getElementById("faultyItems");
let h2 = document.getElementById("launchStatus");
let pilotName = "Chris";
let copilotName = "Blake";
let fuelLevel = 10000;
let cargoMass = 10000;



window.addEventListener("load", function () {  
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if(validateInput(pilotName.value) === "" || validateInput(copilotName.value) === ""  || validateInput(fuelLevel.value) === "Is a Number" || validateInput(cargoMass.value) === "Is a Number") {
        alert("All fields are required and must be the correct type!");
        event.preventDefault();
        } else {
        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value);
        event.preventDefault();
    }
});  

   let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then((result) => {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(() => {
        console.log(listedPlanets);
        
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet);
    });




  
})