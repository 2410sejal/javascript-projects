let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];
console.log("cargoHold: "+cargoHold);
//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold[5] = 'space tether'
console.log("cargoHold: "+cargoHold);
//2) Remove the last item from the array with pop. Print the element removed and the updated array.
let elementRemoved = cargoHold.pop()
console.log("Removed element "+elementRemoved)
console.log("cargoHold: "+cargoHold);
//3) Remove the first item from the array with shift. Print the element removed and the updated array.
elementRemoved = cargoHold.shift();
console.log("Removed element "+elementRemoved)
console.log("cargoHold: "+cargoHold);
//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHold.unshift(1138);
cargoHold.push("20 meters")
console.log("cargoHold: "+cargoHold);
//5) Use a template literal to print the final array and its length.
console.log(`Final Array cargoHold: ${cargoHold} and its length ${cargoHold.length}`);