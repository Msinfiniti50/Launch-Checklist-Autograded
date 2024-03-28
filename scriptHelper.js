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

function updateStatusElements(fuelMessage, cargoMessage, launchMessage, color) {
    fuelStatus.innerHTML = fuelMessage;
    cargoStatus.innerHTML = cargoMessage;
    launchStatus.innerHTML = launchMessage;
    launchStatus.style.color = color;
}


 function formSubmission(document, list, pilotName, copilotName, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");

    let readyForLaunch = true;
      if (validateInput(pilotName) === "Empty" || validateInput(copilotName) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        alert("All fields are required!");
    } else if (validateInput(pilotName) === "Is a Number" || validateInput(copilotName) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        alert("Must be valid information for each field!");
    } else {
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilotName} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName} is ready for launch`;
        launchStatus.style.color = "green";
    
   if (fuelLevel <= 10000 && cargoLevel <= 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "red";
    } else if (fuelLevel >= 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';

    } else if (fuelLevel < 10000 && cargoLevel > 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = 'red';

    } else if(readyForLaunch === true) {
        console.log("shuttle should be ready");
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = 'green';
    }  
        
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
