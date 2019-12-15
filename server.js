const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://orio-host.glitch.me/`);
}, 280000);

// كل البكجات الي ممكن تحتجها في اي بوت 
const { Client, RichEmbed } = require("discord.js");
var { Util } = require('discord.js');
const {TOKEN, YT_API_KEY, prefix, devs} = require('./config')
const client = new Client({ disableEveryone: true})
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
const { get } = require('snekfetch');
const guild = require('guild');
const dateFormat = require('dateformat');//npm i dateformat
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
client.on('ready', () => { 
  console.log(`Logged in as ${client.user.tag}!`);
});
 

 //كود للتجربة 

client.on('message', message =>{
  if(message.content === '-ping'){
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`\`\`\`js
Time taken: ${Date.now() - start} ms
Discord API: ${client.ping.toFixed(0)} ms\`\`\``);
  });
  }
});



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


const category = "category-id";
let mtickets   = true;
let tchannels  = [];
let current    = 0;


client.on('ready',async () => console.log(`   - " ${client.user.username} " , Tickety is ready to work.`));
client.on('message',async message => {
    if(message.author.bot || message.channel.type === 'dm') return;
    let args = message.content.split(" ");
    let author = message.author.id;
    if(args[0].toLowerCase() === `${prefix}help`) {
            let embed = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setThumbnail(message.author.avatarURL)
            .setColor("#36393e")
			.addField(`⇏ -new                     → لفتح تكت`)
            .addField(`⇏ -close                   → لغلق تكت`)
            .addField(`⇏ -mtickets enable/disable → لتعطيل وتفعيل تكت `)
			.addField(`⇏ cleartickets             →  لمسح جميع تكتات`)
            .addField(``)
            await message.channel.send(`:white_check_mark: , **هذه قائمة بجميع اوامر البووت.**`);
            await message.channel.send(embed);
 } else if(args[0].toLowerCase() === `${prefix}new`) {
        if(mtickets === false) return message.channel.send(`:tools: , **This feature has been disabled by a server administrator**`);
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`:tools: , **The bot has no powers to make rum**`);
        console.log(current);
        let openReason = "";
        current++;
        message.guild.createChannel(`ticket-${current}`, 'text').then(c => {
        tchannels.push(c.id);
        c.setParent(category);
        message.channel.send(`**:tickets: Ticket created.**`);
        c.overwritePermissions(message.guild.id, {
            READ_MESSAGES: false,
            SEND_MESSAGES: false
        });
        c.overwritePermissions(message.author.id, {
            READ_MESSAGES: true,
            SEND_MESSAGES: true
        });
       
        if(args[1]) openReason = `\nThe reason for opening the open ticket , " **${args.slice(1).join(" ")}** "`;
        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("#36393e")
        .setDescription(`**Wait a while until the Support team responds to you**${openReason}`);
        c.send(`${message.author}`);
        c.send(embed);
    });
    } else if(args[0].toLowerCase() === `${prefix}tickets`) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`  **You do not have permission**`);
		if(args[1] && args[1].toLowerCase() === "enable") {
			mtickets = true;
			message.channel.send(` **Ticket command enable**`);
		} else if(args[1] && args[1].toLowerCase() === "disable") {
			mtickets = false;
			message.channel.send(`**Ticket command disable** `);
		} else if(!args[1]) {
			if(mtickets === true) {
			mtickets = false;
			message.channel.send(` **Ticket command disable**   `);
			} else if(mtickets === false) {
			mtickets = true;
			message.channel.send(`**Ticket command enable**`);
			}
		}
    }
  if(message.content.startsWith(prefix + `add`)) {
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`**Error** :octagonal_sign:\nI Don\'t have MANAGE_CHANNELS Permission to do this`)
  if(!message.channel.name.startsWith("ticket-")) return message.channel.send(`this command only for the tickets`);
let member = message.mentions.members.first();
if(!member) return message.channel.send(`**Please mention the user :x:**`);
if(message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) return message.channel.send(`this member already in this ticket :rolling_eyes:`);
message.channel.overwritePermissions(member.id, { SEND_MESSAGES: true, VIEW_CHANNEL: true, READ_MESSAGE_HISTORY: true });
message.channel.send(`**Done <a:yes:600109199552413706> \nSuccessfully added <@${member.user.id}> to the ticket**`)
let tgt = new Discord.RichEmbed()
.setColor(`GREEN`)
.setAuthor(`Added member to a ticket`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033109539160066/563111851165220885.png`)
.setTimestamp();
} if(message.content.startsWith(prefix + `remove`)) {
  if(!message.channel.name.startsWith("ticket-")) {
      return message.channel.send(`**This command only for the tickets**`);
  }
  let member = message.mentions.members.first();
  if(!member || member.id === client.user.id) {
      return message.channel.send(`**Please mention the user :x:**`);
  }
  if(!message.channel.permissionsFor(member).has(['SEND_MESSAGES', 'VIEW_CHANNEL', 'READ_MESSAGE_HISTORY'])) {
      return message.channel.send(`:x: **${member.user.tag}** is not in this ticket to remove them`);
  }
  message.channel.overwritePermissions(member.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, READ_MESSAGE_HISTORY: false });
  message.channel.send(`**Done <a:yes:600109199552413706> \nSuccessfully removed \`${member.user.tag}\` from the ticket**`)
  let gtg = new Discord.RichEmbed()
.setColor(`BLUE`)
.setAuthor(`**Removed member from a ticket**`)
.setDescription(`Ticket : #${message.channel.name}
Member : ${member}
by : <@${message.author.id}>`)
.setThumbnail(`https://cdn.discordapp.com/attachments/584630360017469461/588033111212949555/563111852352077886.png`)
.setTimestamp();
  }
  else if(args[0].toLowerCase() === `${prefix}close`) {
		if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`**You do not have permission**`);
		if(!message.channel.name.startsWith('ticket-') && !tchannels.includes(message.channel.id)) return message.channel.send(`This room is not from tickets room**`);
		
		message.channel.send(`:white_check_mark:, **The ticket will close in 3 seconds**`);
		tchannels.splice( tchannels.indexOf(message.channel.id), 1 );
		setTimeout(() => message.channel.delete(), 3000);
	 
		
	} else if(args[0].toLowerCase() === prefix + "closeall") {
		let iq = 0;
		for(let q = 0; q < tchannels.length; q++) {
			let c = message.guild.channels.get(tchannels[q]);
			if(c) {
				c.delete();
				tchannels.splice( tchannels[q], 1 );
				iq++;
			}
			if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
				message.channel.send(`<a:yes:600109199552413706>, **Done i closed all tickets Number \`${iq}\` **`);
			}
		}
	}
});








const developers = ["603456072954544141"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
     
  if (message.content.startsWith(prefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else
 
  if (message.content.startsWith(prefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else
  if (message.content.startsWith(prefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(prefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});
