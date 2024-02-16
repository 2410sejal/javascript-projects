//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor (name, mass, scores){
this.name = name;
this.mass = mass;
this.scores = scores;
    }
    addscore(newscore){
        this.scores.push(newscore);
        return this.scores;
    }
    average(){
        let totalscore = 0;
        for  (let i=0; i<this.scores.length; i++){
            totalscore += this.scores[i];
        let average = Math.round((totalscore/this.scores.length)*10)/10;
      }
         return average;
    }
}


let candidate1 = new CrewCandidate('Bubba Bear', 135,[88,85,90]);
let candidate2 = new CrewCandidate('Merry Maltese',1.5,[93,88,97]);
let candidate3 = new CrewCandidate('Glad Gator',225,[75,78,62]);





candidate1.addscore(83);
console.log(candidate2.average(scores));
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.