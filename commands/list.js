const Discord = require("discord.js");
const client = new Discord.Client();
//const disbut = require('discord-buttons');
//const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: 'list',
    description: "shows command list",
    run(message, args, Discord, client, prefix) {
        const commandEmbed = new Discord.MessageEmbed()
        .setColor('#C7CDEF')
        .setTitle('i bestow upon you.. my command list!~')
        .setDescription("basically part 2 of the `,help` command list because my creator can't make embeds with reaction pages yet.")
        .addFields(
            {name: '<:NB_drink:781123971671785483> **extras** <:NB_drink:781123971671785483>', value: 'extra commands'},
            {name: ',avatar', value: "i'll send back your avatar!\nyou can do `,avatar <@user> which will send back the mention user's avatar!"},
            {name: ',remind', value: `i'll remind you to do something in a set amount of time!`},
            {name: ',searchonspotify', value: `"searches a song you type in and sends back the link. credits to Nelly-o#6275 for this command!" ~nagisa`},
            {name: ',say', value: `makes minagi say what you want to say.\n**"UPDATE: ONLY I (THE CREATOR OF MINAGI) CAN USE THIS COMMAND, this is to avoid misuse!**" ~nagisa`},
            {name: ',ping', value: `check if i'm online!`},
            {name: '<:NB_drink:781123971671785483> **music (BETA)** <:NB_drink:781123971671785483>', value: 'still testing this feature in minagi..\n**2023 creator update: THIS FUNCTION NO LONGER WORKS PROPERLY, DISCORD HATES ME**'},
            {name: ',play', value: "format : `,play (song title/keywords)`"},
            {name: ',leave', value: `i have no pause function yet, so accept this instead.`},
        )
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

    message.channel.send(commandEmbed);
    }
}

// this a single command file. 

/*
const Discord = require("discord.js");
const client = new Discord.Client();
const disbut = require('discord-buttons');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: 'list',
    description: "shows command list",
    run(message, args, Discord, client, prefix) {
        const commandEmbed = new Discord.MessageEmbed()
        .setColor('#C7CDEF')
        .setTitle('i bestow upon you.. my command list!~')
        .setDescription("basically part 2 of the `,help` command list because my creator can't make embeds with reaction pages yet.")
        .addFields(
            {name: '<:NB_drink:781123971671785483> **extras** <:NB_drink:781123971671785483>', value: 'extra commands'},
            {name: ',avatar', value: "i'll send back your avatar!\nyou can do `,avatar <@user> which will send back the mention user's avatar!"},
            {name: ',remind', value: `i'll remind you to do something in a set amount of time!`},
            {name: ',searchonspotify', value: `"searches a song you type in and sends back the link. credits to Nelly-o#6275 for this command!" ~nagisa`},
            {name: ',say', value: `makes minagi say what you want to say.\n**"UPDATE: ONLY I (THE CREATOR OF MINAGI) CAN USE THIS COMMAND, this is to avoid misuse!**" ~nagisa`},
            {name: ',ping', value: `check if i'm online!`},
            {name: '<:NB_drink:781123971671785483> **music (BETA)** <:NB_drink:781123971671785483>', value: 'still testing this feature in minagi..'},
            {name: ',play', value: "format : `,play (song title/keywords)`"},
            {name: ',leave', value: `i have no pause function yet, so accept this instead.`},
        )
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        let btn = new disbut.MessageButton()
            .setStyle('red')
            .setLabel('My First Button!') 
            .setID('click_to_function') 
            .setDisabled();

    message.channel.send(commandEmbed, btn);
    }
}
// this a single command file. 

*/

