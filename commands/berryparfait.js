module.exports = {
    name: 'berryparfait',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a second... \n🍓 **`here's your berry parfait!`** 🍓")
        .setImage('https://64.media.tumblr.com/69e91c9d8e853667909f31d57dbec124/tumblr_p01zhpZdmp1tdnbbbo1_400.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
