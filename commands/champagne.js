module.exports = {
    name: 'champagne',
    description: "illegal",
    run(message, args, Discord){
        const champEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("ah, my coworker here will be serving you! \none sec...\nanyway, \n🥂 **`here's your champagne!`** 🥂\n***enjoy~***")
        .setImage('https://i.pinimg.com/originals/2c/c7/af/2cc7af68233ab697480ea0ef391e31cb.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, champEmbed);
    }
}
// this a single command file.