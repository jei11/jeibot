const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDE2Mzk3NzI5MTI0NzEyNDQ4.DXD60g.CpaEf9csRbDnfEwrZfrNkcoDssY);
