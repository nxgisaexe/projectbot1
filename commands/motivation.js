module.exports = {
    name: 'motivation',
    description: "a basic motivating command.",
    run(message, args){
        message.channel.send(`i know you can do it!`);
    }
}
// this a single command file.