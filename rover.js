

class Rover {
  
   // Write code here!
  constructor(position){
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message){
    let response = message;
    for(let i=0; i<message.commands.length)
    if(message.commands[i].commandType==="STATUS_CHECK"){
      
    }
    return response
  }
  
}

module.exports = Rover;