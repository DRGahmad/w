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






client.on("message", message => { // تقديم اداره
  if(message.content.startsWith("#apply")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find("name", "applying")
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + '`1`').then( (m) =>{
              m.edit( message.member + ', اسمك' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + '`2`').then( (m) =>{
                      m.edit( message.member + ', عمرك' )
                      setTimeout(() => {
                        m.delete()
                      }, 2500);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + '`3`').then( (m) =>{
                            m.edit( message.member + ' كم لك بالديسكورد' )
                            setTimeout(() => {
                              m.delete()
                            }, 2500);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + '`4`').then( (m) =>{
                                  m.edit( message.member + ', تعرف القوانين كاملة !' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 2500);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + '``5``').then( (m) =>{
                                        m.edit( message.member + ', مدة تفاعلك' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', Data is being sent').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                          .setAuthor(message.author.username, message.author.avatarURL) 
                          .setColor('#c3cdff')
                        .setTitle(`\`Apply Administartion\` \n سوف يتم الرد عليك قريبا من الادارة , \n > ID: ${message.author.id}`)
                        .addField('> \`Name:\`', ` ** ${name} ** ` , true)
                        .addField('> \`Age:\`', ` ** ${age} ** ` , true)
                        .addField('> \`Your period of stay Discord:\`',`** ${ask} ** ` , true)
                        .addField('> \`Do you know all the laws:\` ',` ** ${ask2} ** ` , true)
                        .addField('> \`Duration your reaction: ?\`',` ** ${ask3} ** ` , true)
                        .addField('> __Your Account Created: __',` \`${message.author.createdAt} \` ` , true)
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
        });
        client.on('message',async message => {
          let mention = message.mentions.members.first();
          if(message.content.startsWith("#accept")) {
          if(!message.channel.guild) return
          let acRoom = message.guild.channels.find('name', 'apply1');
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("Please Mention");
         
          acRoom.send(`> اهلا بك تم قبولك ك اداري في السيرفر \n ${mention} Discord staff - :partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("#refusal")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'apply1');
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("Please Mention");
 
  acRoom.send(`> نعتذر منك تم رفضك محاولة اخرى في وقت لاحق \n ${mention} - :pleading_face: `)
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
