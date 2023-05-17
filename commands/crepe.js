module.exports = {
    name: 'crepe',
    description: "because why not.",
    run(message, args, Discord){
        const crepeEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍓 **`here's your crepe~`** 🍓")
        .setImage('https://media.discordapp.net/attachments/749892409370083342/830300191113609256/5959e008d5a1ef7cb2f85a50e27c920d.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, crepeEmbed);
    }
}
// this a single command file.