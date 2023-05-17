module.exports = {
    name: 'cookie',
    description: "because why not.",
    run(message, args, Discord){
        const cookieEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a second... \n🍪 **`here's your cookies~`** 🍪")
        .setImage("https://images-ext-1.discordapp.net/external/sx1renGGpUNMKId0a1kzaJzK3VNjxnnlgzmhC7rQDrM/%3Fitemid%3D12138523/https/media1.tenor.com/images/cde2279d47be9c6552308d97f5ab935a/tenor.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, cookieEmbed);

    }
}
// this a single command file.