module.exports = {
    name: 'whisky',
    description: "illegal",
    run(message, args, Discord){
        const whiskyEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("ah, my coworker here will be serving you! \none sec...\nanyway, \n🥃 **`here's your whisky!`** 🥃\n***enjoy~***")
        .setImage('https://p.favim.com/orig/2018/12/22/retro-anime-maison-ikkoku-gif-Favim.com-6706447.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, whiskyEmbed);
    }
}
// this a single command file.