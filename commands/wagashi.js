module.exports = {
    name: 'wagashi',
    description: "nyoom, mochio.",
    run(message, args, Discord){
        const wagashiEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🍓 **`here's your wagashi`** 🌸")
        .setImage('https://i.pinimg.com/originals/b1/66/f1/b166f1d73ad8de94e81f2ad32d686b2a.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, wagashiEmbed);
    }
}
// this a single command file.