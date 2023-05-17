module.exports = {
    name: 'sashimi',
    description: "alalalalalaallallalalalalal",
    run(message, args, Discord){
        const sashimiEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍣 **`here's your sashimi~`** 🍣")
        .setImage('https://thumbs.gfycat.com/TerribleVainBunting-size_restricted.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, sashimiEmbed);
    }
}
// this a single command file.