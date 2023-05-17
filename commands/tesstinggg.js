
const Discord = require('discord.js'); // Define the discord.js module
const client = new Discord.Client(); // Creating discord.js client (constructor)

module.exports = {
  name: 'testinggg',
  description: "buttons",
  run(message, args, Discord, client, prefix) {
    const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
                .setLabel("testa")
                .setStyle("blurple")
                .setID("test")
			);

		const embed = new MessageEmbed()
			.setColor('#0099ff')
			.setTitle('fart')
			.setURL('https://tenor.com/view/wow-shocked-blue-emoji-reari-koreaboomina-gif-24011125')
			.setDescription('fart');

		await interaction.reply({ content: 'Pong!', ephemeral: true, embeds: [embed], components: [row] });
	}
});
{
}}}
