
module.exports = {
    name: 'toast',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a second... \n🍞 **`here's your toast- oh wait.`** 🍞\n> ..well, i guess you should go to the convience store instead <:cringlesminagichansprite1_donots:870951794040246332>")
        .setImage('https://i.stack.imgur.com/y934C.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
