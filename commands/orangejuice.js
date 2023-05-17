module.exports = {
    name: 'orangejuice',
    description: "because why not.",
    run(message, args, Discord){
        const juiceEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🧃 **`here's your orange juice~`** 🧃")
        .setImage('https://media.discordapp.net/attachments/749892409370083342/830300979197902878/d6b5da78d77c67b45c8df6c0fc8571ad.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, juiceEmbed);
    }
}
// this a single command file.