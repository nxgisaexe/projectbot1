module.exports = {
    name: 'omurice',
    description: "omurice cato pog",
    run(message, args, Discord){
        const omuriceEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍳 **`here's your omurice~`** 🍳")
        .setImage('https://i.pinimg.com/originals/8f/65/8d/8f658d3952a672d60d4475ae2dec2ba7.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, omuriceEmbed);
    }
}
// this a single command file.