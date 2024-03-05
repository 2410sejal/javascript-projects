window.addEventListener("load", function() {
    fetch("<https://handlers.education.launchcode.org/static/astronauts.json>").then(function(response){
        response.json().then(function(json){
            json.sort((a,b) =>{
                return  b.hoursInSpace - a.hoursInSpace;
              })
      
              // console.log(json);
                
              let container = this.document.getElementById("container");
      
                  for (let i = 0; i < json.length; i++){
                  let activeClass = json[i].active? 'true' : 'false';
      
                  container.innerHTML += `
                  <div class="astronaut">
                  <div class="bio">
                  <h3>${json[i].firstName} ${json[i].lastName}</h3>
                  <ul>
                  <li>Hours in space: ${json[i].hoursInSpace}</li>
                  <li class ="${activeClass}">Active: ${json[i].active}</li>
                  <li>Skills: ${json[i].skills}</li>
                  </ul>
                  </div>
                  <img class="avatar" src="${json[i].picture}">
                  </div>
               `   
              }
              //container.innerHTML = `Number of Astronauts is : ${json.length}`;
      
              let count = document.getElementById("count");
              count.innerHTML = `Number of Astronauts is : ${json.length}`;
                     
            });
          });
      
      });
