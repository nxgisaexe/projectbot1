module.exports = {
    name: 'water',
    description: "hydrate need.",
    run(message, args, Discord){
        const waterEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n💧 **`here's your water~`** 💧")
        .setImage('https://i.pinimg.com/originals/89/2f/12/892f128a3c11c21c934f487ff9e37a77.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, waterEmbed);
    }
}
// this a single command file.