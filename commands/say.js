module.exports = {
    name: 'say',
    description: "because why not.",
    run(message){
      message.delete();
        message.channel.send(message.content.slice(5, message.content.length));
    
  }
}

/* module.exports = {
    name: 'say',
    description: "because why not.",
    run(message){
      if (message.author.id === '711919081791684608') {
        message.delete();
        message.channel.send(message.content.slice(5, message.content.length));
    }
  }
} */