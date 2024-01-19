// Initialize Variables below

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

let date = 'Monday 2019-03-18'
let time = '10:05:34 AM'
let astronautCount = 7;
let astronautStatus = 'ready' 
let averageAstronautMassKg = 80.7 
let crewMassKg = astronautCount * averageAstronautMassKg
let fuelMassKg = 760000
let shuttleMassKg = 74842.31
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
let maximumMassLimit = 850000
let fuelTempCelsius = -225
let minimumFuelTemp = -300
let maximumFuelTemp = -150
let fuelLevel = '100%'
let weatherStatus = 'clear' 
let preparedForLiftOff = true


if (!(astronautCount <= 7)) {
    console.log("exceeding astronauts count");
    preparedForLiftOff = false
 }
if (!(astronautStatus == 'ready')) {
    console.log("astronauts not ready");
    preparedForLiftOff = false
}
if (!(totalMassKg < maximumMassLimit)) {
    //     console.log(" mass is within limits");
    // } else {
        console.log("mass limit breach");
        preparedForLiftOff = false
    }
if (!(fuelTempCelsius > -300 && fuelTempCelsius < -150)) {
    console.log("Fuel temperature not correct");
    preparedForLiftOff = false
}
if (!(fuelLevel === '100%')) {
    console.log("Fuel level not meet");
    preparedForLiftOff = false
}
if (!(weatherStatus == 'clear')) {
    console.log("weather conditions not fair");
    preparedForLiftOff = false
}


if (preparedForLiftOff) {
    console.log ("All systems are a go! Initiating space shuttle launch sequence.");

    console.log ("Date: "+date+"\n time: "+time+"\n astronautCount:"+astronautCount+ "\n weatherStatus" +weatherStatus+ " \n crewMass "+crewMassKg+ " \n fuelMass"+fuelMassKg+" \n shuttleMassKg "+shuttleMassKg+
        "\n total mass:" +totalMassKg+ " \n fuelTemperature "+fuelTempCelsius+ " \n weatherStatus "+weatherStatus+ "." );

    console.log ("Have a safe trip astronauts!");
}