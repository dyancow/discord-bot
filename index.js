// This is the code for the discord bot
// 09-29-2020
// Created by Dian and Chandra :>

// imports and creates a const of all the discord javascript stuff
const Discord = require('discord.js');
// imports and creates a const of secret files
const config = require('./config.json');
// makes a new discord client
const client = new Discord.Client();

// announces that the code is working and ready a singular time
client.once('ready', () => {
	console.log('Ready!');
});
// keeps listening for keyword then sends a message out
client.on('message', message => {
	if (message.content === ':>') {
        // sends back cute nice message
        message.channel.send("You're cute <a:ALoveChancake:755145813558034633>");
    }
    if (message.content === ':<'){
        // sends back concerned message
        message.channel.send("Oh no, what's wrong :<< <a:ACryChancake:755125270247112784>")
    }
});
// discord token
client.login(config.token);