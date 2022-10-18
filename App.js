const fs = require('fs');

const Discord = require('discord.js');
const bot = new Discord.Client();

const EventFiles = fs.readdirSync('./Events').filter(file => file.endsWith('.js'));

const f = require('./Inc/Functions.js');

for (const file of EventFiles) {
	const event = require(`./Events/${file}`);
	if (event.once) {
		bot.once(event.name, (...args) => event.execute(...args, bot));
	} else {
		bot.on(event.name, (...args) => event.execute(...args, bot));
	}
}

bot.login(f.Config().token)