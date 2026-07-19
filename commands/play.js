const ytdl = require('ytdl-core');
//const ytSearch = require('yt-search');

const queue = new Map();

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop'],
    cooldown: 0,
    description: 'joins and plays a video from youtube',
    async run(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if (!voiceChannel) return message.channel.send('you needa join a vc channel to issue this command, or else who am i supposed to play the jukebox to?');
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')) return message.channel.send(`aw, it seems that i can't connect to the vc channel.. check your channel permissions maybe?\n**tip: double check your channel permissions to make sure i have the permission to *connect!***`);
        if (!permissions.has('SPEAK')) return message.channel.send(`ah man, i can't play your song, because i can't speak in the vc! how am i supposed to play the jukebox now? \n**tip: double check your channel permissions to make sure i have the permission to *speak!***`);
        if (!args.length) return message.channel.send(`please specify the song you want me to play, as the jukebox nor i can't read ur mind, hehe`);
 
        const validURL = (str) =>{
            var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
            if(!regex.test(str)){
                return false;
            } else {
                return true;
            }
        }
 
        if(validURL(args[0])){
 
            const  connection = await voiceChannel.join();
            const stream  = ytdl(args[0], {filter: 'audioonly'});
 
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
                message.channel.send(`alright, the song is done! i'll turn the jukebox off, bye!~`);
            });
 
            await message.reply(`now playing **${song.title}** !`)
 
            return
        }
 
        
        const  connection = await voiceChannel.join();
 
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
 
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
 
        }
 
        const video = await videoFinder(args.join(' '));
 
        if(video){
            const stream  = ytdl(video.url, {filter: 'audioonly'});
            connection.play(stream, {seek: 0, volume: 1})
            .on('finish', () =>{
                voiceChannel.leave();
            });
 
            await message.reply(`now playing ***${video.title}***!`)
        } else {
            message.channel.send('no results found :(');
        }
    }
    
}
