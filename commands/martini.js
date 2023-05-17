module.exports = {
    name: 'martini',
    description: "illegal",
    run(message, args, Discord){
        const martiniEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("ah, my coworker here will be serving you! \none sec...\nanyway, \n🍸 **`here's your martini!`** 🍸\n***enjoy~***")
        .setImage('https://media1.giphy.com/media/2UH9iWJtliXoRygWXe/giphy.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, martiniEmbed);
    }
}
// this a single command file.