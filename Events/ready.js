const f = require('../Inc/Functions.js');

module.exports = {
	name: 'ready',
	once: true,
	execute(bot) {
		f.Start(bot);
	},
};