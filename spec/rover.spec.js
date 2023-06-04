const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Rover class", function() {

  const rover = new Rover(2023);
  const message = new Message("This is the message.", [new Command("MOVE", 1), new Command("MOVE", 2)])
  
  // 7 tests here!
  it("constructor sets position and default values for mode and generatorWatts", function(){
    expect(rover.position).toEqual(2023);
    expect(rover.mode).toEqual("NORMAL");
    expect(rover.generatorWatts).toEqual(110);
  })

  //test 8
  it("response returned by receiveMessage contains name of message", function(){
    expect(rover.receiveMessage(message).name).toEqual("This is the message.")
  })

  // //test 9
  // it("response returned by receiveMessage includes two results if two commands are sent in the message", function(){
    
  // })

  // //test 10
  // it("responds correctly to status check command", function(){
    
  // })

  // //test 11
  // it("responds correctly to mode change command", function(){
    
  // })


  // //test 12
  // it("responds with false completed value when attempting to move in LOW_POWER mode", functino(){
    
  // })

  // //test 13
  // it("responds with position for move command", function(){
    
  // })

});
