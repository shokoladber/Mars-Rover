const Command = require('command.js');

class Message {
   constructor(name = "", commands = [Command]){
     this.name = name;
     this.commands = commands;
     
   }
}

module.exports = Message;