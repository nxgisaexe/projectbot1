module.exports = {
    name: 'ping',
    description: "a basic ping command.",
    run(message, args){
        message.channel.send(`${message.author} haha pong!`); 
    }
}
// this a single command file.