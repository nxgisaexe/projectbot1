//https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55660762-c858-4a1b-9239-4e143f216fa4/ddc9uyk-fe44b414-64d1-428e-ad8e-27390de6b507.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NjYwNzYyLWM4NTgtNGExYi05MjM5LTRlMTQzZjIxNmZhNFwvZGRjOXV5ay1mZTQ0YjQxNC02NGQxLTQyOGUtYWQ4ZS0yNzM5MGRlNmI1MDcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aXJFGHHhLfuSFEcj6UyaFyV5FwvC6wDV0yJzXut1owI
module.exports = {
    name: 'bingsu',
    description: "yes",
    run(message, args, Discord){
        const burgerEmbed = new Discord.MessageEmbed()
        .setColor('#ECDCC9')
        .setTitle(`🛎 request received, here's your order!~`)
        .setDescription("***oh?*** \nmmm give me a second... \n🍧 **`here's your shaved ice!`** 🍧")
        .setImage('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/55660762-c858-4a1b-9239-4e143f216fa4/ddc9uyk-fe44b414-64d1-428e-ad8e-27390de6b507.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NjYwNzYyLWM4NTgtNGExYi05MjM5LTRlMTQzZjIxNmZhNFwvZGRjOXV5ay1mZTQ0YjQxNC02NGQxLTQyOGUtYWQ4ZS0yNzM5MGRlNmI1MDcuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.aXJFGHHhLfuSFEcj6UyaFyV5FwvC6wDV0yJzXut1owI')
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`, burgerEmbed);
    }
}
// this a single command file.
