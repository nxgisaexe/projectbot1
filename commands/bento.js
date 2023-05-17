module.exports = {
    name: 'bento',
    description: "bento very pogchamp.",
    run(message, args, Discord){
        const bentoEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nhmm give me a second... \n🍱 **`here's your bento`** 🍱")
        .setImage('https://data.whicdn.com/images/276670451/original.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, bentoEmbed);
    }
}
// this a single command file.