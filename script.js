const {addDestinationInfo, formSubmission, myFetch, pickplanet} = require("./scriptHelper.js");
window.addEventListener("load", function(event) {
//   let listedPlanetsResponse = myFetch('https://handlers.education.launchcode.org/static/planets.json');
 listedPlanetsResponse.then((result)=> {
let listedPlanets = result;
let planet = pickPlanet(listedPlanets);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
});
   const form = document.querySelector("form");
   const list = document.getElementById("faultyItems");
   list.style.visibility = "hidden";

form.addEventListener("submit", function(event) {
   event.preventDefault(); 
   let pilotName = document.querySelector("input[name=pilotName]").value;
   let copilotName = document.querySelector("input[name=copilotName]").value;
   let fuelLevel = Number(document.querySelector("input[name=fuelLevel]").value);
   let cargoLevel = Number(document.querySelector("input[name=cargoMass]").value);

   formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel); 
   
  });
}); 