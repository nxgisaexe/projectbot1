module.exports = {
    name: 'creator',
    description: "a basic creator command.",
    run(message, args, Discord){
        const creatorEmbed = new Discord.MessageEmbed()
        .setColor('#ba9dd8')
        .setTitle(`<:NB_purple_sparkles:781120059405238272> meet nagisa, my creator!~ <:NB_purple_sparkles:781120059405238272>`)
        .setDescription("<@711919081791684608> is my creator! <:HOT_i_nagisa_best_SC:790594375226097665> - feel free to talk to her anytime! <:NB_heart:781123971546218597>\n*here's a small bit about my creator ;;*")
        .addFields(
            {name : '<:NB_envelope:781123973495783464> bio', value : '<:NB_ribbon:781123972003266580> `nickname` ;; nagisa\n<:NB_ribbon:781123972003266580> `age` ;; 13\n<:NB_ribbon:781123972003266580> `current occupation` ;; full-time student who does side projects like bot developing\n<:NB_ribbon:781123972003266580> `ethnicity` ;; asian\n<:NB_ribbon:781123972003266580> `gender, pronouns, orientation` ;; female, she/her, bi-curious\n<:NB_ribbon:781123972003266580> `extra info` ;; my creator is a weeb, and likes art/drawing in general. she also is interested in science.', inline : true},
            {name : '<:NB_ribbon:781123973332729860> past/current favs', value : '<:NB_kuromi:781126219198103563> nagisa shiota (from assassination classroom - comic series & anime)\n<:NB_kuromi:781126220619972628> menhera-chan (from menhera-chan the wrist-cut warrior - comic series)\n<:images8:781126219105304596> omori & literally all characters in there (from omori - rpg game)', inline : true},
            {name : '<:NB_telephone:787932928407109642> contacts', value : '<:NB_ribbon:781123972003266580> insta ;; nxgisa.exe\n<:NB_ribbon:781123972003266580> email ;; nxgisa.exe05@gmail.com\n<:NB_ribbon:781123972003266580> yt ;; nxgisa exe\n<:NB_ribbon:781123972003266580> spotify ;; nxgisa.exe\n<:NB_ribbon:781123972003266580> github ;; nxgisaexe', inline : true}
        )
        .setImage("https://media.discordapp.net/attachments/781121079854366770/815761977246089256/Screenshot_2021-03-01_at_9.45.33_AM.png")
        .setTimestamp()
        .setFooter('© nxgisa.exe#7330', 'https://cdn.discordapp.com/avatars/711919081791684608/f82e1574ab73c4f198615dab5441cf96.webp?size=160')

        message.channel.send(`${message.author}`,creatorEmbed);
        
    }
}
// this a single command file.a