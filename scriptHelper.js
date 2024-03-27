// const polyfill = require('./polyfill');
function addDestinationInfo( document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let div = document.getElementById("missionTarget");
    div.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                    <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
              <img src="${imageUrl}">
   `;
}
 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    } else if (isNaN(testInput)){
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}

 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {
    let fuelStatus = document.getElementById("fuelStatus");
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");

    let readyForLaunch = true;
      if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) !== "Empty" || validateInput(cargoLevel) !== "Empty") {
    readyForLaunch = false;
    console.log("All fields are required!");
    }
    if (validateInput(pilotName) !== "Empty") {
    pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
    } else {
    pilotStatus.innerHTML = "Pilot ready";
    copilotStatus.innerHTML = "Co-pilot ready";
    }
    if (!readyForLaunch) {
    list.style.visibility = "visible";    
    launchStatus.innerHTML = "Shuttle Not Ready for Launch";
    launchStatus.style.color = "red";
} else {
    list.style.visibility = 'hidden';
    launchStatus.innerHTML = 'Shuttle is Ready for Launch';
    launchStatus.style.color = 'green';
   }
 }
        

 async function myFetch() {
    let planetsReturned;

    planetsReturned= await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
        return response.json();
    });
    return planetsReturned;
    }

function pickPlanet(planets) {   
      let index = Math.floor(Math.random() * planets.length);
      return planets[index];
    }
module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;  


