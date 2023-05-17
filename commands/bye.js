module.exports = {
    name: 'bye',
    description: "a basic bye command.",
    run(message, args){
        message.channel.send("ah, mata ne!~ looking forward to see you again!");
    }
}
// this a single command file.