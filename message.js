const Command = require('command.js');

class Message {
   constructor(name = "", commands = [Command]){
     this.name = name;
     if (!name){
       throw Error("Name required.")
     }
     this.commands = commands;
     
   }
}

module.exports = Message;