
module.exports = {
    name: 'frenchfries',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nfries coming right up... \n🍟 **`here it is!`** 🍟")
        .setImage('https://64.media.tumblr.com/bfddee9db25957b0e5efb93cfda566ba/84bff31add5d1329-34/s540x810/cabd06ade6abfdfee795d7d4a2d0fdf6b580c45a.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
