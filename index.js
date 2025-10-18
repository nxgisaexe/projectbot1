/* welc to minagichan bot's index.js (main) file! 
this is the file where the main settings are found! 
remember to do cmd+s and then do node . in the terminal to save whatever you've done! (or just enable autosave lmao)
have fun ^^ */

const Discord = require('discord.js');
const client = new Discord.Client();

require('discord-buttons')(client);
let disbut = require('discord-buttons');

const prefix = ','; // bot prefix

const queue = new Map();

const http = require('http');

const fs = require('node:fs');
const path = require('node:path');

const port = 54535;

http.createServer((req, res) => {
	let responseCode = 404;
	let content = 'thanks for letting the bot know you! you may now close this tab owo';

	if (req.url === '/') {
		responseCode = 200;
		content = fs.readFileSync('./index.html');
	}

	res.writeHead(responseCode, {
		'content-type': 'text/html;charset=utf-8',
	});

	res.write(content);
	res.end();
})
	.listen(port);

client.commands = new Discord.Collection(); // creates a discord collection
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js')); // file filter to make it's a js file

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command); // command sorter so that commands don't overload and bot crash
}

client.on("message", function(message) {
    // if (message.author.bot) return; / if message is sent by other bot, will be ignored.
    if (!message.content.startsWith(prefix)) 
     return; // if message does not start with prefix, will be ignored
    
     // const commandBody = message.content.slice(prefix.length);
     const args = message.content.slice(prefix.length).trim().split(' ');
     const command = args.shift().toLowerCase();

     if (!client.commands.has(command)) return;
     try {
          client.commands.get(command).run(message, args, Discord, client, prefix);
     } catch (err) {
          console.error(err);
          message.reply('there was an error trying to run that command!');
     }
    }
,)

/*
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	// Set a new item in the Collection with the key as the command name and the value as the exported module
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
} */

/* client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
	console.log(interaction);
});

client.on('clickButton', async (button) => {
    button(defer)
}) */
// for buttons sksjjsj






//put these listed below at very bottom of script ⬇⬇⬇
client.once('ready' , () => {
    console.log('minagichan is online!');
    client.user.setPresence({
        status: 'dnd',
        activity: {
            type: 'WATCHING',
            name: 'nagi procrastinate again',
        }
    });
});
client.login('TOKEN'); // I accidentally left my bot token out here oops so ill just delete that...


