
module.exports = {
    name: 'fondue',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a moment... \n🫕 **`here's your cheese fondue, enjoy!`** 🫕")
        .setImage('https://64.media.tumblr.com/747a08be15a78756839d3b18e39daf1c/tumblr_pnxc43ycfi1tdnbbbo2_540.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
