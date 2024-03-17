

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name} </li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="https://solarsystem.nasa.gov/system/resources/detail_files/16278_PIA20016.jpg">
        `;
                    
}

function validateInput(testInput) {
    if (testInput === "") {
        return ("Empty");
     } else if (isNaN(testInput)) {
        return("Not a Number");
    } else {
        return ("Is a Number");
    }
}

function formSubmission(document, list, pilot , copilot , fuelLevel, cargoMass) {
    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch!`;   
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch!`;


   
    if (fuelLevel < 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }

    if (cargoMass > 10000) {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = 'red';
        document.getElementById("faultyItems").style.visibility = "visible";
    } else {
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }

    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
    }
}

async function myFetch() {
    let response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    let planetsReturned = await  response.json();
    return planetsReturned;
    }

function pickPlanet(planets) {
    let planet = planets[Math.floor(Math.random() * planets.length)];
    return planet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;