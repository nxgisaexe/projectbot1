module.exports = {
    name: 'ramune',
    description: "soda hydrate need.",
    run(message, args, Discord){
        const ramuneEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n💧 **`here's your ramune~`** 💧\n> i added some side snacks to enjoy as well~! take the biscuits, it's yours :)")
        .setImage('https://i.pinimg.com/originals/07/fd/ee/07fdee9ec80a214148bd30b52213f7ac.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, ramuneEmbed);
    }
}
// this a single command file.