module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic', 'profilepicture'],
    description: 'alalalal',
    // can replace run with run btw, depends on ur code lmao
    run(message, args, Discord){
// nombar 1 your own avatar
        if (!message.mentions.users.size) {
            const selfavatarEmbed = new Discord.MessageEmbed()
            .setColor('#b6b4ee')
            .setTitle(`here's your avatar!`)
            .setTimestamp()
            .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')
            .setImage(`${message.author.displayAvatarURL({dynamic: true })}`)
            
            return message.channel.send(selfavatarEmbed);
        }
        
// now for other people's avatars when mention peopl
        const othravatar = message.mentions.users.map(user => {
            const othravatarEmbed = new Discord.MessageEmbed()
            .setColor('#b6b4ee')
            .setTitle(`here's ${user.username}'s avatar!`)
            .setTimestamp()
            .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')
            .setImage(`${user.displayAvatarURL({dynamic: true })}`)
            
            return message.channel.send(othravatarEmbed);
        });
    }
}
// dynamic is so that it can either be png of gif, both should work! literally any format lmao

// this a single command file.