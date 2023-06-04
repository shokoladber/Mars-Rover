const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

  const setMessageParams = new Message("This is the message.", [new Command("MOVE", 1), new Command("MOVE", 2)]);

it("throws error if a name is NOT passed into the constructor as the first parameter", function() {
    expect( function() {new Message()}).toThrow(new Error("Name required."));
  });
  
  //uses setMessageParams
  it("constructor sets name", function(){
    expect(setMessageParams.name).toEqual("This is the message.")
  })

  //uses setMessageParms
  it("contains a commands array passed into the constructor as 2nd argument", function(){
    expect(setMessageParams.commands).toEqual([new Command("MOVE", 1), new Command("MOVE", 2)])
  })

  
  
});
