module.exports = {
  name: '8ball',
  description: 'random answor',
  async run(message, args, Discord) {
    if (!args[0]) 
    return message.channel.send(`pls ask an actual question.. i can't read ur mind :(`); // return if no question is commenced
    
    const replies = [
      `the 8ball says... it is certain!`, 
      'the 8ball says... how about a no.', 
      `the 8ball says... that's impossible!`, 
      'the 8ball says... probably yes.', 
      `the 8ball says... my magic isn't working now, maybe try asking again later.`
    ]; // random responses

    const result = Math.floor(Math.random() * replies.length); // get random response from array
    const question = args.join(' '); // join the args(Array<string>) to a question string

    // check perms for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const ballembed = new Discord.MessageEmbed()
        .setTitle('🎱 8ball!')
        .setColor('#b6b4ee')
        .addField('question:', question)
        .addField('answer:', replies[result])
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')
        
        message.channel.send(`${message.author}`, ballembed); // send embed message
        message.react('<:NB_purple_sparkles:781120059405238272>');

    } else {
      message.channel.send(`${message.author}`, `**question:**\n${question}\n**answer:**\n${replies[result]}\n(NOTE: i did not have permissions to send embeds, thus i send in this format instead. *to fix this, allow me to EMBED LINKS in this channel.* `);
    }
  },
};