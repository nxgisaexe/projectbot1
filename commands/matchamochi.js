module.exports = {
    name: 'matchamochi',
    aliases: 'mochi',
    description: "nyoom, mochio.",
    run(message, args, Discord){
        const mochiiEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍵 **`here's your matcha warabi mochi~`** 🍵")
        .setImage('https://64.media.tumblr.com/5d0f52ad28bc917cf07a3c68cac14015/tumblr_ptvvn2DPAi1tdnbbbo2_500.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, mochiiEmbed);
    }
}
// this a single command file.