module.exports = {
    name: 'matcha',
    description: "because why not.",
    run(message, args, Discord){
        const matchaEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nokay give me a second... \n🍵 **`here's your matcha~`** 🍵")
        .setImage("https://i.pinimg.com/originals/ef/7b/f1/ef7bf1075541d119048934ca58fd3bb0.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, matchaEmbed);
    } 
}
// this a single command file.