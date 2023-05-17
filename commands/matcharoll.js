module.exports = {
    name: 'matcharoll',
    description: "because why not.",
    run(message, args, Discord){
        const matcharollEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n☕️ **`here's your matcha roll~`** ☕️")
        .setImage("https://images-ext-2.discordapp.net/external/nYNldmyJTYC8L_er2vuA-ZS1hnJPRVMHeHX6vQSu9nY/https/i.pinimg.com/originals/28/ba/4b/28ba4b7e64e54bef1ebcfd530af9c938.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')


        message.channel.send(`${message.author}`, matcharollEmbed);
    }
}
// this a single command file.