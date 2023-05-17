module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async run(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("you need to be in a voice channel to make me leave. i mean, how the hell am i supposed to know when to leave if no one's telling me to?");
        await voiceChannel.leave();
        await message.channel.send('ight, leaving channel! cya next time.')
 
    }
}
