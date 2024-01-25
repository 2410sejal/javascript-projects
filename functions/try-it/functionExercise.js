function makeLine(size){
    let line = "";
    for (let i=0 ; i< size; i++) {
        // console.log("makeLine Iteration ",j); 
        line += "#";
    }
    return line;
}

// console.log(makeLine(5));

function makeSquare(size){
    let square = ""
    for (let i=0 ; i< size; i++) {
        // console.log("makeSquare Iteration ",i); 
        if (i== size -1){
            square = square+makeLine(size);   
        }else {
    square = square+makeLine(size)+"\n";
    }
    }
     return square ;
}


function makeRectangle(width, height){
    let rectangle ="";
    // rectangle += makeLine(width);
    for (let i=0 ; i< height; i++) {
        if (i== height -1){
            rectangle += makeLine(width);   
        }else {
            rectangle += makeLine(width)+"\n";   
        }
    }
    return rectangle;
}

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 1; i <= height; i++) {
      stairs += (makeLine(i) + '\n');
    }
    return stairs;
  }

 function makeSpaceLine(numSpaces, numChars){
    let spaceLine = "";
    for (i=0; i <= numSpaces; i++ ) {
        spaceLine += spaceLine.padStart(numSpaces,' ')+makeLine(numChars)+spaceLine.padStart(numSpaces,' ');
        return spaceLine.slice(0,-1);

    }

 }

 function makeIsoscelesTriangle(height) {
  let triangle = '';
  for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - (i - 1), (2 * i) + 1) + '\n');
  }
  return triangle.slice(0,-1);
}
 
function makeDiamond(height){
    let diamond = "";
    diamond = makeIsoscelesTriangle(height)+"\n"+makeIsoscelesTriangle(height).split('').reverse().join('');
    return diamond;
}

// console.log(makeLine(6));
// console.log(makeSquare(5));
// console.log(makeRectangle(5,3));
// console.log(makeDownwardStairs(5));
// console.log(makeSpaceLine(3, 5));
// console.log(makeIsoscelesTriangle(5));
// console.log(makeDiamond(5));

    // BONUS MISSION :

function makeLine(size,numchar = "#"){
    let line = "";
    for (i=0; i<size; i++){
        line += numchar;
    }
     return line;
}
console.log(makeLine(6,"@"));