const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://rose-sprint.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const {
    Client,
    RichEmbed
} = require("discord.js");
var {
    Util
} = require('discord.js');
const {
    TOKEN,
    YT_API_KEY,
    prefix,
    devs
} = require('./config')
const client = new Client({
    disableEveryone: true
})
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const Canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const botversion = require('./package.json').version;
const simpleytapi = require('simple-youtube-api')
const moment = require("moment");
const fs = require('fs');
const util = require("util")
const gif = require("gif-search");
const opus = require("node-opus");
const ms = require("ms");
const jimp = require("jimp");
const {
    get
} = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat'); //npm i dateformat
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const yt_api_key = "AIzaSyDeoIH0u1e72AtfpwSKKOSy3IPp2UHzqi4";
const pretty = require("pretty-ms");
client.login(TOKEN);
const queue = new Map();
var table = require('table').table
const Discord = require('discord.js');

console.log("==================================")
console.log("1")
console.log("2")
console.log("3")
console.log("=========> Bot Online <=========")
console.log("========> TestBot <========")
console.log("=======> Token Bot **** <=======")
console.log("3")
console.log("2")
console.log("1")
console.log("====================================")
console.log("Bot Online 24/7");





//كود للتجربة 

client.on('message', message => {
    if (message.content === '-ping') {
        let start = Date.now();
        message.channel.send('pong').then(message => {
            message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
        });
    }
});

client.on('message', async message => {
    let args = message.content.split(' ').slice(1).join(' ');

    let user = message.guild.members.get(args)

    const db = require("quick.db");
    let prefix = "$";
    let bl = await db.fetch(`blacklist_${user}`)
    if (!message.channel.guild) return;
    if (message.content.startsWith(prefix + "blacklist")) {
        if (!args) return message.channel.send("**Please Give me id or mention **");

        db.set(`blacklist_${user}`, "on")

        message.channel.send("blacklisted")
    }
    if (message.content.startsWith(prefix + "unblacklist")) {
        if (!args) return message.channel.send("**Please Give me id or mention **");

        db.set(`blacklist_${user}`, "off")

        message.channel.send("unblacklisted")
    }
    if (message.content.startsWith("bt")) {
        if (bl === "on") message.channel.send("you're black listed")
        if (bl === "off") message.channel.send("you're not black listed")
        if (bl === null) message.channel.send("you're not black listed2")


    }
});

//kk
const ticketInfos = []; //dont delete
client.on('message', async message => {
    const db = require("quick.db");
    let args = message.content.split(' ').slice(1).join(' ');

    let user = message.guild.members.get(args)
    let bl = await db.fetch(`blacklist_${user}`)

    if (message.content.startsWith(prefix + 'new')) {
        if (bl === "on") return message.channel.send("**you're black listed from tickets system !!**")

        if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
        let log = message.guild.channels.find("name", "tickets-log");
        let args = message.content.split(' ').slice(1).join(' ');
        let support = message.guild.roles.find("name", "Support");
        let ticketsStation = message.guild.channels.find("name", "TICKETS");
        let reason = message.content.split(" ").slice(1).join(" ");
        if (!reason) reason = 'NONE';
        const embed = new Discord.RichEmbed()
            .setColor("#36393e")
            .addField(`**Error :interrobang:**`, `This server doesn't have a \`Support\` role made so the ticket won't be opened.`)
            .setTimestamp();
        if (!message.guild.roles.exists("name", "Support")) return message.channel.send({
            embed: embed
        });
        if (message.guild.channels.exists("name", `ticket-${message.author.name}`)) return message.channel.send(`do you have ticket`);
        if (!ticketsStation) return message.channel.send(`**Error! **:interrobang:\n please create \`category\` Called \`TICKETS\``)
        message.guild.createChannel(`ticket-` + message.author.username, "text").then(c => {
            if (!ticketInfos[message.guild.id + c.id]) ticketInfos[message.guild.id + c.id] = {
                by: message.author.id
            };
            ticketInfos[message.guild.id + c.id].by = message.author.id; //come down
            c.setParent(ticketsStation);
            c.setTopic(`ticket by: ${message.author.id}`)
            const done = new Discord.RichEmbed()
                .setColor(`GREEN`)
                .setTitle(`Ticket Created`)
                .setDescription(`Ticket : #${c.name}
 by :<@${message.author.id}>
 Reason : ${reason}`)
                .setTimestamp()
                .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033107635208193/563111847692337174.png`)
                .setFooter(message.author.tag)
            if (log) log.send(done)
            let role = message.guild.roles.find("name", "Support");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });

            /////////////
            const eembed = new Discord.RichEmbed()
                .setColor("#00ffd4")
                //.setThumbnail(message.author.avatarURL)
                .addField(`Your ticket has been created :white_check_mark:`, `<#${c.id}>`)
                .setFooter(`${client.user.tag} BY | ${message.author.tag}`, client.user.displayAvatarURL);
            //////////////////
            message.channel.send({
                embed: eembed
            });
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .setThumbnail(message.author.avatarURL)
                .addField(`**Welcome**`, `<@${message.author.id}>`)
                .addField(`Our **__Support Team__** will be here soon to help.`, `** **`)
                .addField(`Reason :`, `${reason}`)
                .setFooter(`${client.user.tag} BY | `, client.user.displayAvatarURL)
                .setTimestamp();
            c.send(`${role}`)
            c.send({
                embed: embed
            }).then
            c.send(`<@${message.author.id}>`).then(b => {
                b.delete();
            })
        }).catch();
    }
    if (message.content.startsWith(prefix + 'rename')) {
        let three = message.content.split(' ').slice(1).join(" ");

        if (!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
        if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return

        message.channel.setName(`ticket-${three}`)
            .then(newChannel => message.channel.send(`**Successfully changed the ticket name to ${three}**`))
            .catch(console.error);
    }
    if (message.content.startsWith(prefix + 'close')) {

        if (message.author.bot) return;
        if (!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`)
        let close = new Discord.RichEmbed()
            .addField(`type \`${prefix}close\` again to confirm`, `** **`)
            .setColor("#36393e");
        message.channel.sendEmbed(close).then(m => {
            const filter = msg => msg.content.startsWith(prefix + 'close');
            if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return
            message.channel.awaitMessages(response => response.content === prefix + 'close', {
                    max: 1,
                    time: 20000,
                    errors: ['time']
                })
                .then((collect) => {
                    message.channel.delete();
                    let Reason = message.content.split(" ").slice(1).join(" ");
                    if (!Reason) Reason = 'NONE';
                    let closee = new Discord.RichEmbed()
                        .setColor(`BLUE`)
                        .setAuthor(`Ticket Closed`)
                        .setDescription(`Ticket : #${message.channel.name}
By : <@${message.author.id}>
Opened By: <@${ticketInfos[message.guild.id+message.channel.id].by}>
Reason : ${Reason}`)
                        .setTimestamp()
                        .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109178712074/563111850162520077.png`)
                        .setFooter(message.author.tag)
                    let log = message.guild.channels.find("name", "tickets-log");
                    if (log) log.send(closee)
                    message.author.send(closee);
                    client.users.get(ticketInfos[message.guild.id + message.channel.id].by).send(closee)
                }).catch(() => {
                    m.delete()
                        .then(message.channel.send('Ticket close timed out, the ticket was not closed')).then((c) => {
                            c.delete(4000);
                        })
                })
        })
    }
    if (message.content.startsWith(prefix + `multiclose`)) {
        if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission`)
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('You don\'t have Permission **MANAGE_CHANNELS** to close all tickets');
        message.guild.channels.filter(c => c.name.toLowerCase().startsWith("ticket-")).forEach(channel => {
            channel.delete();
        })
        const ttt = new Discord.RichEmbed()
            .setColor("GREEN")
            .addField(`**Done all Tickets has been closed :white_check_mark:**`, `** **`)
        message.channel.send(ttt)
        let log = message.guild.channels.find("name", "tickets-log");
        const rr = new Discord.RichEmbed()
            .setColor("GREEN")
            .addField(`**all Tickets channels has been closed :white_check_mark:**`, `**by <@${message.author.id}>**`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588151961279397898/582096914376425501.png`)
            .setTimestamp();
        if (log) return log.send(rr)
        //
    }
    if (message.content.startsWith(prefix + `add`)) {
        if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
        if (!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
        let member = message.mentions.members.first();
        if (!member) return message.channel.send(`**Please mention the user :x:**`);
        if (message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
        message.channel.overwritePermissions(member.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
            READ_MESSAGE_HISTORY: true
        });
        message.channel.send(`**Done :white_check_mark:\nSuccessfully added <@${member.user.id}> to the ticket**`)
        let tgt = new Discord.RichEmbed()
            .setColor(`GREEN`)
            .setAuthor(`Added member to a ticket`)
            .setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
            .setTimestamp();
        let log = message.guild.channels.find("name", "tickets-log");
        if (log) return log.send(tgt);
    }
    if (message.content.startsWith(prefix + `remove`)) {
        if (!message.channel.name.startsWith("ticket-")) {
            return message.channel.send(`this command only for the tickets`);
        }
        let member = message.mentions.members.first();
        if (!member || member.id === client.user.id) {
            return message.channel.send(`**Please mention the user :x:**`);
        }
        if (!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
            return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
        }
        message.channel.overwritePermissions(member.id, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
            READ_MESSAGE_HISTORY: false
        });
        message.channel.send(`**Done :white_check_mark:\nSuccessfully removed \`${member.user.tag}\` from the ticket**`)
        let gtg = new Discord.RichEmbed()
            .setColor(`BLUE`)
            .setAuthor(`removed member from a ticket`)
            .setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
            .setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
            .setTimestamp();
        let log = message.guild.channels.find("name", "tickets-log");
        if (log) return log.send(gtg);
    }

});