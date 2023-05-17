module.exports = {
    name: 'tea',
    description: "because why not.",
    run(message, args, Discord){
        const teaEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nokay give me a second... \n☕️ **`here's your tea~`** ☕️")
        .setImage("https://64.media.tumblr.com/f77c1d19c488175e315c93b038d63506/tumblr_nukwimiAOd1udvy5wo1_500.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, teaEmbed);
    } 
}
// this a single command file.