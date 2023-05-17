module.exports = {
    name: 'invite',
    description: "a basic invite command.",
    run(message, args){
      if (message.author.id === '711919081791684608') {
        message.channel.send("here's my invite! \nhttps://discord.com/api/oauth2/authorize?client_id=787203801165070337&permissions=8&scope=bot");
    }
      else {
      message.channel.send("meow! there's one extra step you need to follow before i can work for you! continue reading if you want to invite me to your hub!\n> hi there, it's nagisa, the creator speaking here. if you're thinking of inviting the bot to your server, **please** __inform__ me beforehand (you have the permission to dm `nxgisa.exe#7330` [me] with this reason even if my status may sometimes say no dms, as this is an exception.). if i spot my bot in a server i do not authorize, i will request an **instant** removal, or else you are **blacklisted from my bot access.**");
    }
  }
}
// this a single command file.
// this command still needs some work. 