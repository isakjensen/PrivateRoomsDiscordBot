const f = require('../Inc/Functions.js');

module.exports = {
	name: 'message',
	execute(message, bot) {
		console.log(message.content);
	},
};