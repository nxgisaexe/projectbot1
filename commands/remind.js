const ms = require('ms')

module.exports = {
    name: "remind",
    description:{
        usage: "format : `remind <time> <reminder>`",
        content:  "set up a quick reminder so you don't forget!",
    },
    async run(message, args, Discord, client) {
        let time = args[0];
        let user = message.author
        let reminder = args.splice(1).join(' ')

        const notime = new Discord.MessageEmbed()
            .setColor('#ec8d8d')
            .setDescription(`please specify the **time** and/or the **reminder!**\ntip: the format for this command is **,remind <time> <reminder>**`)

        const wrongtime = new Discord.MessageEmbed()
            .setColor('#ec8d8d')
            .setDescription(`please specify the **time** (in the correct format, too!)\ni can only do reminders in terms of **d**ays, **h**ours, **m**inutes, and **s**econds only\n**tip: specify a valid time unit using d, h, m, and s.**\nyou could potentially be doing the format wrong, too! \nthe format is **,remind <time> <reminder>** -- incase you forgot!`)

        const reminderembed = new Discord.MessageEmbed()
            .setColor('#ec8d8d')
            .setDescription(`please specify the **reminder**! i can't read your mind, hehe~\ntip: the format is **,remind <time> <reminder>** -- incase you forgot!`)

        if (!args[0]) return message.channel.send(notime)
        if (
            !args[0].endsWith("d") &&   
            !args[0].endsWith("m") &&
            !args[0].endsWith("h") &&
            !args[0].endsWith("s")
        )
            return message.channel.send(wrongtime)
        
        if (!reminder) return message.channel.send(reminderembed)

        const remindertime = new Discord.MessageEmbed()
        .setColor('#bfe9c2')
        .setDescription(`reminder set! i'll remind you to **${reminder}** in **${time}**!`)

        message.channel.send(remindertime)

        const reminderA = new Discord.MessageEmbed()
        .setColor('#fcd0ee')
        .setTitle(`ding ding! here's your reminder~`)
        .setDescription(`..it has been ${time}, and you asked me to remind you to **${reminder}** !`)  

        setTimeout(async function () {
           try{

            user.send(reminderA)
           }catch(err){} 
        }, ms(time));
    }
}