module.exports = {
    name: 'help',
    description: "about minagi.",
    run(message, args, Discord) {
        const aboutEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle('a bit about me!~')
        .setDescription("info page! 🍬\n・┈┈ ・┈┈ ・┈┈ ・┈┈ ・┈┈ ・┈┈ ・\n<:NB_heart:781123971546218597> hi!! you can call me minagi!~")
        .addFields(
            {name : '<:NB_coffee:781123972527947836> creator', value : "i'm a bot created by <@711919081791684608>~! \nfor more info, check out `,creator` ! the command has a brief bio on my creator."},
            {name : '<:NB_ribbon:781123973332729860> purpose', value : "i was created for fun purposes, and my creator needed to pass some time\nmore info on where i came from can be found by doing the `,origin` command!"},
            {name : '<:NB_coffee:781123972527947836> commands', value : "do `,help` to get the command list!"},
            {name : '<:NB_ribbon:781123973332729860> menu', value: "yes, i'm a cafe bot, i have a menu! you can see what i serve by doing `,menu` !"},
            {name : '<:NB_coffee:781123972527947836> credits + apps used (aside from discord&dev portal)', value : "all credits! \n© nxgisa.exe#7330 (my creator, she created my pfp, and me!)\n© Pinterest! (banners + gifs)\n© Google Chrome Image Search (gifs)\n© IbisPaintX & Procreate (what my creator uses to create illustrations)\n© Visual Studio Code (what my creator uses to code me)"}
        )
        .setThumbnail(`https://cdn.discordapp.com/attachments/854696080926441509/1107855889538486322/Screenshot_2023-05-16_at_10.23.41_AM.png`)
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`,aboutEmbed);
        message.react('<:NB_ribbon:781123973332729860>');

    }
}
// this a single command file.