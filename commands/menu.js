module.exports = {
    name: 'menu',
    description: "food list lol",
    run(message, args, Discord) {
        const menuEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle('the foods i serve!')
        .setDescription("to order, simply issue the commands below. the commands are just my prefix, and the food name! enjoy your meal. <:NB_heart:781123971546218597>")
        .addFields(
            {name : '<:NB_coffee:781123972527947836> beverages', value : "`,beer`|`,boba`|`,champagne`|`,coffee`|`,cola`|`,eggfriedrice`|`,icedocha`|`,martini`|`,matcha`|`,orangejuice`|`,ramune`|`,red-wine`|`,tea`|`,warmocha`|`,water`|`,whisky`"},
            {name : `<:NB_ribbon:781123973332729860> foodies`, value : "`,bento`|`,burger`|`,omurice`|`,ramen`|`,sashimi`|`,steak`|`,sushi`|`,fondue`"},
            {name : '<:NB_coffee:781123972527947836> desserts', value: "`,berryparfait`|`,bingsu`|`, cake`|`,chocolate-icecream`|`,crepe`|`,dango`|`,donut`|`,icecreamcake`|`,lavacake`|`,matchamochi`|`,matcharoll`|`,mintparfait`|`,pancake`|`,pudding`|`,strawberry-icecream`|`,wagashi`"},
            {name : '<:NB_ribbon:781123973332729860> snacks', value: "`,chicken-nuggets`|`,cookie`|`,fries`|`,chips`|`,takoyaki`|`,hotdog`"},
            {name : '<:NB_coffee:781123972527947836> special', value : "`,toast`"}
        )
        .setThumbnail(`https://media.discordapp.net/attachments/780045310620860417/789794476105007104/image2.png`)
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`,menuEmbed);
        message.react('<:NB_ribbon:781123973332729860>');

    }
}
// this a single command file. 