module.exports = {
    name: 'pudding',
    description: "because why not.",
    run(message, args, Discord){
        const puddingEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍫 **`here's your pudding~`** 🍫")
        .setImage('https://64.media.tumblr.com/e41758b6fcc10b3f036f65f0945d8606/tumblr_poid1hbrSJ1xmvbrdo1_500.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, puddingEmbed);
    }
}
// this a single command file.