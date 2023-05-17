module.exports = {
    name: 'mintparfait',
    description: "because why not.",
    run(message, args, Discord){
        const mintparfaitEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nokay give me a second... \n🍵 **`here's your mint parfait~`** 🍵\n> ❝ ?.. something different about.. me? ah my bad, i'm wearing my long sleeve uniform today, just finished doing some delivery.. i'll change soon. ❞")
        .setImage("https://64.media.tumblr.com/4e83fe187569cee411dfb7c8ab8155d2/tumblr_puykkutvh21wg3yn2o8_500.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, mintparfaitEmbed);
    } 
}
// this a single command file.