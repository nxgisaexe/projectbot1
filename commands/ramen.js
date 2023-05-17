module.exports = {
    name: 'ramen',
    description: "ramen ramen yes.",
    run(message, args, Discord){
        const ramenEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍜 **`here's your ramen!`** 🍜")
        .setImage('https://i.pinimg.com/originals/57/1e/c1/571ec11ad37e04809791d8bef34313c1.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, ramenEmbed);
    }
}
// this a single command file.