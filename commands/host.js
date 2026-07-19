module.exports = {
    name: 'host',
    description: "HOTs",
    run(message, args, Discord){
        if (message.author.id === '711919081791684608') {
        const hostEmbed = new Discord.MessageEmbed()
        .setColor('#ba9dd8')
        .setAuthor('nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')
        .setTitle(`<:NB_purple_sparkles:781120059405238272> hosting a study session. <:NB_purple_sparkles:781120059405238272>`)
        .setDescription("+  .    `♡`         .      +     `♡`        +  .  +  .    `♡`         .      +     `♡`        +  .  +  .    `♡`         .      +     `♡`        +  .\nHERE COMES.. THE RETURN OF HOSTED MESSAGES WITH EMBEDS AND BANNERS!!")
        .addFields(
            {name : '<:NB_telephone:787932928407109642> time?', value : "i'll probably be hosting for another 2+ hours or so, we'll see.\nsession starting time: <t:1751104322:R>\ntimezone;; GMT+8"},
            {name : "... \ngrind time.. lots of work to do..", value : ',, come join me in study cafe!\n+  .    `♡`         .      +     `♡`        +  .  +  .    `♡`         .      +     `♡`        +  .  +  .    `♡`         .      +     `♡`        +  .'},
        )
        .setImage('https://cdn.discordapp.com/attachments/1004020956152463430/1014469556108005466/Screenshot_2022-08-31_at_5.39.34_PM.png')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`<@&776682310275563560>`,hostEmbed);
    }
}
}
// this a single command file.