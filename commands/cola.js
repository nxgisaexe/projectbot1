module.exports = {
    name: 'cola',
    description: "cola hydrate need.",
    run(message, args, Discord){
        const colaEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nteehee give me a second... \n🥤 **`here's your cola~`** 🥤")
        .setImage('https://64.media.tumblr.com/078ecc482289766fa9340ce9bc6d3cc9/95412d192c07d054-0c/s540x810/2c6f0e72ab42268fd00df09544704ed3446f5d1d.gif')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, colaEmbed);
    }
}
// this a single command file.