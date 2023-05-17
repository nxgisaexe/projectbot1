module.exports = {
    name: 'dango',
    description: "nyoom, mochio.",
    run(message, args, Discord){
        const dangoEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍡 **`here's your dango~`** 🍡")
        .setImage('https://i.pinimg.com/originals/f7/cc/6c/f7cc6ce6eccc2ae6b20b1f3e4e7d3950.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, dangoEmbed);
    }
}
// this a single command file.