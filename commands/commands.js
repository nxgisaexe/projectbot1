module.exports = {
    name: 'commands',
    description: "shows command list",
    run(message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#C7CDEF')
        .setTitle("<:NB_ribbon:781123973332729860>  ding ding~ i'm minagichan! my prefix is `,` <:NB_ribbon:781123973332729860> ")
        .setDescription("*what do you need?* (ps. for more commands, do `,commands`!)")
        .addFields(
            {name: '<:NB_drink:781123971671785483> **main** <:NB_drink:781123971671785483>', value: 'extra commands'},
            {name: ',menu', value: 'the foods i serve online!'},
            {name: ',about', value: 'about me!'},
            {name: ',creator', value: 'about my creator!'},
            {name: ',creator-status', value: 'what my creator is up to lately!'},
            {name: ',origin', value: `where i'm from!`},
            {name: '<:NB_drink:781123971671785483> **fun** <:NB_drink:781123971671785483>', value: 'extra commands'},
            {name: ',hi', value: `hello~! (a different response each time!)`},
            {name: ',hello', value: `want coffee?`},
            {name: ',hru', value: `how am i today?`},
            {name: ',bye', value: `sayonara!`},
            {name: ',hug', value: `need support? i'm here for you!`},
            {name: ',tysm', value: `any time!`},
            {name: ',seretonin', value: `the happy.`},
            {name: ',die', value: `don't die please!`},
            {name: ',idiot', value: `now who's the idiot?`},
            {name: ',welcome', value: `i'm not mimu but welc!`},
            {name: ',pick', value: `again, i'm not mimu, teehee~`},
            {name: ',no', value: `geez.`},
            {name: ',nya', value: `meow~`},
            {name: ',pat', value: `arigato.`},
            {name: ',kiss', value: `chu~`},
            {name: ',reward', value: `minagi will thank you like never before.`},
            {name: ',8ball', value: `magik. you can use it for your future decision-making, probably. 8/10 reliability.`},
            {name: ',begonethot', value: `thot begone.`},
            {name: ',friends', value: `"...are what i don't have in real life" ~nagisa, 2021`},
            {name: ',hellmo', value: `all hail hellmo.`},
            {name: ',motivation', value: `have faith in yourself (please)`}
        )
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(helpEmbed);
    }
}
// this a single command file. 