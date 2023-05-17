module.exports = {
    name: 'creator-status',
    description: "creator status",
    run(message, args, Discord) {
        const creatorstatusEmbed = new Discord.MessageEmbed()
        .setColor('#ba9dd8')
        .setTitle(`<:NB_purple_sparkles:781120059405238272> creator status! <:NB_purple_sparkles:781120059405238272>`)
        .setDescription("<:HOT_i_nagisa_best_SC:790594375226097665> my current status lately! nagisa speaking here. check out `,creator` if you haven't! <:catlamp:834850888233123911>")
        .addFields(
            { name : '<:images8:781126219105304596> schoolwork', value : `<:NB_ribbon:781123973332729860> exam year!! very busy.`},
            { name : '<:NB_kuromi:781126219198103563> projects', value : `<:NB_ribbon:781123973332729860> forget about coding an rpg game, how about solidifiying the plot first?\nanyways, until further notice ive decided to abandon the highly ambitious idea lmao.`},
            { name : '<:NB_kuromi:781126220619972628> bot activity', value : `<:NB_ribbon:781123973332729860> this bot might go on and off\nuntil i get a hosting website or something to help host this bot, i'll be hosting it manually.`}
        )
        .setImage("https://cdn.discordapp.com/attachments/874508828371218433/1029019041161039943/IMG_4758.PNGg")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(creatorstatusEmbed);
    }
}

// https://media.discordapp.net/attachments/781121079854366770/815761977246089256/Screenshot_2021-03-01_at_9.45.33_AM.png
// this a single command file.
/* with old menhera banner:
module.exports = {
    name: 'creator-status',
    description: "creator status",
    run(message, args, Discord) {
        const creatorstatusEmbed = new Discord.MessageEmbed()
        .setColor('#ba9dd8')
        .setTitle(`<:NB_purple_sparkles:781120059405238272> creator status! <:NB_purple_sparkles:781120059405238272>`)
        .setDescription("<:HOT_i_nagisa_best_SC:790594375226097665> my current status lately! nagisa speaking here. check out `,creator` if you haven't! <:catlamp:834850888233123911>")
        .addFields(
            { name : '<:images8:781126219105304596> schoolwork', value : `<:NB_ribbon:781123973332729860> exam year!! very busy.`},
            { name : '<:NB_kuromi:781126219198103563> projects', value : `<:NB_ribbon:781123973332729860> forget about coding an rpg game, how about solidifiying the plot first?\nanyways, until further notice ive decided to abandon the highly ambitious idea lmao.`},
            { name : '<:NB_kuromi:781126220619972628> bot activity', value : `<:NB_ribbon:781123973332729860> this bot might go on and off\nuntil i get a hosting website or something to help host this bot, i'll be hosting it manually.`}
        )
        .setImage("https://media.discordapp.net/attachments/781121079854366770/815761977246089256/Screenshot_2021-03-01_at_9.45.33_AM.png")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330 - © banner/illustration above by Ezaki Bisuko so credits to the creator.', 'https://cdn.discordapp.com/avatars/711919081791684608/55cc9fd3f8716eaeb7911f8ba58ac44b.webp?size=256')

        message.channel.send(creatorstatusEmbed);
    }
} */