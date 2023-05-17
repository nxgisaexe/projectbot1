module.exports = {
    name: 'chocolate-icecream',
    description: "choco ice cream.",
    run(message, args, Discord){
        const chocolateicecreamEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍫 **`here's your chocolate ice cream~`** 🍫")
        .setImage('https://64.media.tumblr.com/1e9b4a04e5ae032a04aba3f8d7d8befa/tumblr_oupjumhjQS1tdnbbbo1_640.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, chocolateicecreamEmbed);
    }
}
// this a single command file.