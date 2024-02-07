let choice = ['rock','paper','scissor'];
// let letsPlay = ("");

function whoWon(player1,player2){
 
  // for (let i=0;i<play.length;i++){
  //   letsPlay = play.indexOf[i];
  // }


    if (!(choice.includes(player1))){
      return 'Invalid player1!';
   }

   if (!(choice.includes(player2))){
    return 'Invalid player2!';
    }
 
   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissor'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissor' && player2 === 'rock'){
     return 'Player 2 wins!';
   }


   return 'Player 1 wins!';
 }
//  console.log(whoWon("rock","rock"));
module.exports = whoWon;