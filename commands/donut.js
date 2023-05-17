module.exports = {
    name: 'donut',
    description: "because why not.",
    run(message, args, Discord){
        const donutEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍩 **`here's your donuts~`** 🍩")
        .setImage('https://64.media.tumblr.com/b8c489f6ecede22c2d981f4754772ea8/tumblr_ovou1mTrmq1tdnbbbo1_640.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, donutEmbed);
    }
}
// this a single command file.