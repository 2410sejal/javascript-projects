//Code Your Solution Below
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        let testNameInput = document.querySelector(input["name=testName"]);
        let boosterCountInput = document.querySelector(input["name=boosterCount"]);
        let testDateInput = document.querySelector(input["name=testDate"]);
        let rocketTypeInput = document.querySelector(input["name=rocketType"]);
        let productionServersInput = document.querySelector(input["name=productionServersInput"]);
        if (testNameInput.value === "" ||
            boosterCountInput.value === 0 ||
            testDateInput.value === 0 ||
            rocketTypeInput.value==="" ||
            productionServersInput.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        };
        
        
    });
})