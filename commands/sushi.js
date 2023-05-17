module.exports = {
    name: 'sushi',
    description: "alalalalalaallallalalalalal",
    run(message, args, Discord){
        const sushiEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍣 **`here's your sushi!`** 🍣")
        .setImage('https://i.pinimg.com/originals/73/7c/f7/737cf7eefd12346c5487bb735e7eafb6.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, sushiEmbed);
    }
}
// this a single command file.