const f = require('../Inc/Functions.js');

module.exports = {
	name: 'voiceStateUpdate',
	execute(oldMember, newMember, bot) {
		if(f.DynamicChannel_IsChannelCorrect(newMember)) {
			f.DynamicChannel_CreateChannel(newMember, bot);
		}
		else if(f.DynamicChannel_IsChannelEmpty(oldMember, bot))
		{
			f.DynamicChannel_DeleteChannel(oldMember, bot);
		}
	},
};