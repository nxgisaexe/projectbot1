/*
const Discord = require('discord.js'); // Define the discord.js module
const client = new Discord.Client(); // Creating discord.js client (constructor)

module.exports = {
  name: 'testing',
  description: "buttons",
  async run:(message, args, Discord, client, prefix) => {
      
  const { MessageButton, MessageActionRow } = require("discord.js")
 
 const embed1 = new Discord.MessageEmbed()
        .setTimestamp()
        .setColor('#ba9dd8')
        .setDescription(`testststs`)

        let btn1 = new MessageButton()
            .setLabel("testa")
            .setStyle("blurple")
            .setID("test")
        let btn2 = new MessageButton()
            .setLabel("lmao")
            .setStyle("blurple")
            .setID("a")

        let row = new MessageActionRow()
            .addComponent(btn1)
            .addComponent(btn2)
 message.channel.send({ button: [btn1, btn2], embed: embed1, })
 if(button.id == 'test'){
  button.reply.send('sdfghjk', true); 
  
}

 
}

}

*/
