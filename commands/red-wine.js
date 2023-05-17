module.exports = {
    name: 'red-wine',
    description: "redwine requested by vitsama therefore yes.",
    run(message, args, Discord){
        const redwineEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("ah, my coworker here will be serving you! \none sec...\nanyway, \n🍷 **`here's your red wine!`** 🍷\n***enjoy~***")
        .setImage('https://i.pinimg.com/originals/10/f7/84/10f784258cb7ad221a970b6929627a36.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, redwineEmbed);
    }
}
// this a single command file.