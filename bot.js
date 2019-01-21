const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
var prefix = "-";
var dat = JSON.parse("{}");

client.on('message', message => {//Toxic Codes
var prefix = "-"//Toxic Codes
        if(message.content.startsWith(prefix + 'hypixel')) {//Toxic Codes
            let args = message.content.split(' ').slice(1).join(' ');//Toxic Codes
            if (!args) return message.channel.send("**رجأء ضع اسمك في ماين كرافت. ❌**");
            var link = (`https://hypixel.net/player/${args}`);//Toxic Codes
            message.channel.send(link);//Toxic Codes
        }//Toxic Codes
    });//Toxic Codes
