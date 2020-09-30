const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === ':>') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send("You're cute :LoveChancake:");
    }
});
client.login(config.token);