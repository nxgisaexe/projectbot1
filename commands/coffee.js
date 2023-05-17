module.exports = {
    name: 'coffee',
    description: "because why not.",
    run(message, args, Discord){
        const coffeeEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n☕️ **`here's your coffee~`** ☕️")
        .setImage("https://data.whicdn.com/images/288429036/original.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')


        message.channel.send(`${message.author}`, coffeeEmbed);
    }
}
// this a single command file.