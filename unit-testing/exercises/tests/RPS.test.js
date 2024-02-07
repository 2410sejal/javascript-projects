const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("returns 'TIE!' player2 chose same as player1", function(){
       expect(whoWon("rock","rock")).toEqual('TIE!');
    });

    test("returns ' player2 win!'", function(){
        expect(whoWon("rock","paper")).toEqual('Player 2 wins!');
     });
     
     test("returns ' player2 win!'", function(){
        expect(whoWon("paper","scissor")).toEqual('Player 2 wins!');
     });

     test("returns ' player2 win!'", function(){
        expect(whoWon("scissor","rock")).toEqual('Player 2 wins!');
     });

     test("returns ' player1 win!'", function(){
        expect(whoWon("rock","scissor")).toEqual('Player 1 wins!');
     });

     test("returns ' player1 win!'", function(){
        expect(whoWon("scissor","paper")).toEqual('Player 1 wins!');
     });

     test("returns ' player1 win!'", function(){
        expect(whoWon("paper","rock")).toEqual('Player 1 wins!');
     });
     
     test("returns 'Invalid input!' if 'rock','paper',scissor'is not chosen", function(){
        expect(whoWon("scissors","685rf6ft")).toEqual('Invalid player1!');
     });  
     
     test("returns 'Invalid input!' if 'rock','paper',scissor'is not chosen", function(){
        expect(whoWon("rock","gvhgv")).toEqual('Invalid player2!');
     });
});
