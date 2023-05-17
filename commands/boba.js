module.exports = {
    name: 'boba',
    description: "because why not.",
    run(message, args, Discord){
        const bobaEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a second... \n🧋 **`here's your boba / milktea ~`** 🧋")
        .setImage("https://i.pinimg.com/originals/db/39/be/db39bedb96263005c6d1d44701bc5795.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, bobaEmbed);

    }
}
// this a single command file.