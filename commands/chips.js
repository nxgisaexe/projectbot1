module.exports = {
    name: 'chips',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a second... \n🥔 **`here's your bag of chips, with a side of ocha!`** 🥔")
        .setImage('https://img.wattpad.com/5b51d8ef6d1d008e80752edc7234cc604abeeaeb/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f42645a4a56313169434d704a2d513d3d2d313030333236373731362e313635366266656430356334613766393432323434383538393836342e676966')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
