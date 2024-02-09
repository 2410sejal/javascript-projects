// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("launchcode object to contain", function(){
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("launchcode object to contain", function(){
    expect(launchcode.executiveDirector).toEqual("Jeff");
  });
  
  test("launchcode object to contain", function(){
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("launchcode object to contain", function(){
    expect(launchcode.programsOffered[0]).toEqual("Web Development");
    expect(launchcode.programsOffered[1]).toEqual("Data Analysis");
    expect(launchcode.programsOffered[2]).toEqual("Liftoff");
    expect(launchcode.programsOffered.length).toEqual(launchcode.programsOffered.length);
  });

  test("When passed a number that is ONLY divisible by 2", function(){
    expect(launchcode.launchOutput()).toEqual('Launch!');
  });

  test("When passed a number that is ONLY divisible by 3", function(){
    expect(launchcode.launchOutput()).toEqual('Code!');
  });

  test("When passed a number that is ONLY divisible by 5", function(){
    expect(launchcode.launchOutput()).toEqual('Rocks!');
  });

  test("When passed a number that is ONLY divisible by 2&3", function(){
    expect(launchcode.launchOutput()).toEqual('LaunchCode!');
  });

  test("When passed a number that is ONLY divisible by 5&3", function(){
    expect(launchcode.launchOutput()).toEqual('Code Rocks!');
  });

  test("When passed a number that is ONLY divisible by 2&5", function(){
    expect(launchcode.launchOutput()).toEqual('Launch Rocks!');
  });
  
  test("When passed a number that is ONLY divisible by 2&3&5", function(){
    expect(launchcode.launchOutput()).toEqual('LaunchCode Rocks!');
  });

  test("When passed a number that is ONLY divisible by 2or3or5", function(){
    expect(launchcode.launchOutput()).toEqual("'Rutabagas! That doesn't work.'");
  });

});