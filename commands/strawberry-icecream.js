module.exports = {
    name: 'strawberry-icecream',
    description: "strawberry ice cream.",
    run(message, args, Discord){
        const strawberryicecreamEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍓 **`here's your strawberry ice cream~`** 🍓")
        .setImage('https://64.media.tumblr.com/a2c5e8570921a132f319a037f23028e4/tumblr_p6wkgpMroB1vf8d0to1_1280.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, strawberryicecreamEmbed);
    }
}
// this a single command file.