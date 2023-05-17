module.exports = {
    name: 'chicken-nuggets',
    description: "reference to chicken nugget contest",
    run(message, args, Discord){
        const nuggetEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍗 **`here's your chicken nuggets!`** 🍗")
        .setImage('https://64.media.tumblr.com/7a260e3055ef4934a3ecc345cda59ceb/tumblr_odgdzi1WVo1uxvvvzo1_500.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, nuggetEmbed);
    }
}
// this a single command file.