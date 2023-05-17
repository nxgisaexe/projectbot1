module.exports = {
    name: 'hotdog',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm hold on for a moment... \n🌭 **`here's your hotdog, enjoy!`** 🌭")
        .setImage('https://cdn.discordapp.com/attachments/854696080926441509/1108003385942220890/4ec08d18f8b1da453b9b83d2f927f24d7bb38ef8.png')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
