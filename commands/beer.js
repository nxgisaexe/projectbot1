module.exports = {
    name: 'beer',
    description: "illegal",
    run(message, args, Discord){
        const beerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("ah, my coworker here will be serving you! \none sec...\nanyway, \n🍺 **`here's your beer!`** 🍺\n***enjoy~***")
        .setImage('https://64.media.tumblr.com/a0545184df5d6eea0b9c7ae3e631bfe5/tumblr_p7m7iwNDKp1tdnbbbo1_1280.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, beerEmbed);
    }
}
// this a single command file.