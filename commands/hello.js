module.exports = {
    name: 'hello',
    description: "a basic hello command.",
    run(message, args){
        message.channel.send('konnichiwa~ would you like some tea today? i hope so!'); 
    }
}
// this a single command file. 