module.exports = {
    name: 'pancake',
    description: "because why not.",
    run(message, args, Discord){
        const pancakeEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nokay give me a second... \n🥞 **`here's your pancakes~`** 🥞")
        .setImage("https://64.media.tumblr.com/bd413c302a480a5dffde5698beb6f955/tumblr_p0r5ae5LxM1vf8d0to1_1280.gif")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, pancakeEmbed);
    } 
}
// this a single command file.