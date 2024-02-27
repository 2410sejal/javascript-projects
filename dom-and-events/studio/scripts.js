// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeOffButton = document.getElementById("takeoff");
    const currentFlightStatus = document.getElementById("flightStatus");
    const backgroundForShuttle = document.getElementById("shuttleBackground");
    const rocketHeight = document.getElementById("spaceShuttleHeight");

    const landButton = document.getElementById("landing");

    const abortButton = document.getElementById("missionAbort");

    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocketImage = document.querySelector("#rocket");

    takeOffButton.addEventListener("click", function() {
        let confirmTakeOff = confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirmTakeOff) {
            currentFlightStatus.innerHTML = "Shuttle in flight.";
            backgroundForShuttle.setAttribute("style", "background-color: blue;");
            rocketHeight.innerHTML = Number(rocketHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener("click", function() {
        let alertLanding = alert("The shuttle is landing. Landing gear engaged.");
        
        currentFlightStatus.innerHTML = "The shuttle has landed.";
        backgroundForShuttle.setAttribute("style", "background-color: green;");
        rocketHeight.innerHTML = 0;
        
    });

    abortButton.addEventListener("click", function() {
        let confirmAbort = confirm("Confirm that you want to abort the mission.");

        if (confirmAbort) {
            currentFlightStatus.innerHTML = "Mission aborted.";
            backgroundForShuttle.setAttribute("style", "background-color: green;");
            rocketHeight.innerHTML = 0;
        }
    });
    upButton.addEventListener("click", function() {
        rocketHeight.innerHTML = Number(rocketHeight.innerHTML) + 10000;
        rocketImage.setAttribute("style", "up: 10px;");
    });

    downButton.addEventListener("click", function() {
        rocketHeight.innerHTML = Number(rocketHeight.innerHTML) - 10000;
        rocketImage.setAttribute("style", "down: 10px;");
    });

    leftButton.addEventListener("click", function() {
        // let leftward = parseInt("10px") + ;

        rocketImage.setAttribute("style", "left: 10px;");
    });

    rightButton.addEventListener("click", function() {
        // let rightward = parseInt("10px") + ;

        rocketImage.setAttribute("style", "up: 10px;");
    });

}

window.addEventListener("load", init);