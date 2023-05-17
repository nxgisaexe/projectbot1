module.exports = {
    name: 'warmocha',
    aliases: 'ocha',
    description: "because why not.",
    run(message, args, Discord){
        const ochaaEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nokay give me a second... \n🍵 **`here's your warm ocha~`** 🍵")
        .setImage("https://i.pinimg.com/originals/28/72/c8/2872c8bad38ec1a46bbbcf40da544c71.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, ochaaEmbed);
    } 
}
// this a single command file.