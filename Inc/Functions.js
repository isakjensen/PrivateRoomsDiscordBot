const c = require('./Config.json');

module.exports = {
    Config: () => {
        return c;
    },
    Start: (bot) => {
        if(bot.user.setActivity('The Terminal', { type: 'Watching' })) {
            console.log(c.prefix.log + c.success.start);
        } else {
            console.log(c.prefix.error + c.errors.start);
        }
    },
    DynamicChannel_IsChannelCorrect: (newMember) => {
        return newMember.channelID !== null && newMember.channel.name == 'Create Room' 
    },
    DynamicChannel_IsChannelEmpty: (oldMember, bot) => {
        return bot.channels.cache.get(oldMember.channelID)
    },
    DynamicChannel_CreateChannel: (newMember, bot) => {
        let guild = bot.guilds.cache.get(c.guild)
        let category = guild.channels.cache.find(channel => channel.name == 'Voice Channels');

        bot.guilds.cache.get(c.guild).channels.create('Room #' + newMember.member.user.discriminator, {
            type: 'voice',
            parent: category
        }).then(channel => {
            newMember.setChannel(channel);
        });
    },
    DynamicChannel_DeleteChannel: (oldMember, bot) => {
        let channel = bot.channels.cache.get(oldMember.channelID)

        if(channel.members.size == 0 && channel.name.includes("Room #"))
        {
            channel.delete();
        }
    }
}