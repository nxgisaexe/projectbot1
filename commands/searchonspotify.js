module.exports = {
    name: "searchonspotify",
    description: "idek",

    async run(message, args, Discord){
        let msglink = args.join('%20') 
        let msg = args.join(' ')

if(!args[0]) return message.channel.send('please gimme a song name to search, i cant read your mind, teehee')
        message.channel.send(`i bestow upon you, the song you probably were searching for!~\nhttps://open.spotify.com/search/${msglink}`)
    }
}