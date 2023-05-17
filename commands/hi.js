module.exports = {
    name: 'hi',
    description: 'hellohihellohi',
    async run(message) {
      const replies = [`konnichiwa!~`, 'hii! would you like some cookies today~?', `hello~! how are you today?~`, 'hii! <3']; // random responses
      const result = Math.floor(Math.random() * replies.length);
      await message.channel.send(`${message.author} ${replies[result]}`);
    }
}
// this is a single command file.
