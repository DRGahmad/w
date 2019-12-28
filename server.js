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








let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 10;/*سعر الحساب الواحد الفل داتا*/let NFAP = 12;/*سعر الحساب الواحد العادي*/let URID = '432231487916736542'//مين بيتحوله الكريديت// ahmeD_Hossam
client.on('message',async message => {// ahmeD_Hossam
if(message == prefix+'stock') {let ahmed = 0;let hossam = 0;// ahmeD_Hossam
  sfa.forEach(acc =>{if(!acc.email) return;ahmed++;});// ahmeD_Hossam
  nfa.forEach(acc =>{if(!acc.email) return;hossam++;});// ahmeD_Hossam // i will kill you soon ok ? xD
  message.channel.send(new Discord.RichEmbed().setTitle('💵 متجر اوريو 💵')// ahmeD_Hossam
  .addField('**[SFA | فل داتا] > **',`**${ahmed} Account(s)**`,true)  .addField('**[NFA | عادي] > **',`**${hossam} Account(s)  **`,true).setColor('GREEN')// ahmeD_Hossam
.addField('**هل تعلم ؟**',`**\`[SFA]\` > فل داتا - حساب يمكنك اللعب وتغيير الاسم والباسوورد والسكن
\`[NFA]\` > العادي = حساب لا يمكنك تغيير اي شيئ فيه, للعب فقط**`)// ahmeD_Hossam
.addField('**الاسعار**',`\`[1 NFA] > 8500 Credits ProBot\` \n \`[1 SFA] > 250 Credits ProBot\``)// ahmeD_Hossam
.setFooter(`تنبيه : الحسابات ليست مضمونة للابد, اي ان الحسابات ليست دائمة`) )}// ahmeD_Hossam
if(message.content.startsWith(prefix+'buy')){// ahmeD_Hossam
let cmd = message.content.split(" ")[1];// ahmeD_Hossam
let args = message.content.split(" ")[2];// ahmeD_Hossam
if(!cmd || !args || isNaN(args)) return message.channel.send(`**استخدام خاطئ ّ! \n Correct Usage Example: $buy SFA 1**`);// ahmeD_Hossam
if(cmd == 'sfa') {// ahmeD_Hossam
  let ahmed = 0
  sfa.forEach(acc =>{if(!acc.email) return;ahmed++;});
      if(ahmed < 1) return message.channel.send("لا يوجد حسابات")
  if(ahmed < args) return message.channel.send("لا يوجد حسابات كافية") // 
message.author.send('✅ Nothing.. Just Check  If Your DM open or no').then(()=>{// ahmeD_Hossam
let P = Math.floor(args*(SFAP))// ahmeD_Hossam
message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor('#918383')// ahmeD_Hossam
.setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
\`#credits <@${URID}> ${P}\`
لديك 3 دقائق قبل الالغاء.**`));// ahmeD_Hossam
let P2 = Math.floor(P-(P*(5/100)));// ahmeD_Hossam
let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$1\` to <@603456072954544141> **`);// ahmeD_Hossam// ahmeD_Hossam
message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })// ahmeD_Hossam
.then( collected =>{// ahmeD_Hossam
let C = 0;let Accs = [];// ahmeD_Hossam
sfa.forEach(acc =>{if(!acc.email) return;if(C == args)return;;Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);C++;// ahmeD_Hossam// ahmeD_Hossam
delete acc.email;delete acc.pass;// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam
fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {if (err) console.error(err)})// ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam
});message.channel.send('**Done,,\nNow Check Your DM**!')
message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M =>M.delete(5*60*1000))
});}).catch(err=>{return message.channel.send('**:x: Please Open Your DM**!')}) }
if(cmd == 'nfa') {
  let hossam = 0;
  sfa.forEach(acc =>{if(!acc.email) return;hossam++;})
  if(hossam < 1) return message.channel.send("لا يوجد حسابات")
  if(hossam < args) return message.channel.send("لا يوجد حسابات كافية")
  message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(()=>{
  let P = Math.floor(args*(NFAP))
  message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor('#918383')
  .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
  Ex : #credits @Mahdi#7777 8500
  لديك 3 دقائق قبل الالغاء.**`));
  let P2 = Math.floor(P-(P*(5/100)));
  let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$237\` to <@603456072954544141> **`)
  message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  let C = 0;let Accs = [];
  nfa.forEach(acc =>{if(!acc.email) return;if(C == args)return;;Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);C++;  delete acc.email;delete acc.pass;
  fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {if (err) console.error(err)})
  });message.channel.send('**Done,,\nNow Check Your DM**!')
  message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M =>M.delete(5*60*1000))
  });}).catch(err=>{return message.channel.send('**:x: Please Open Your DM**!')}) } }
})




client.on('message',message => {
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
 
    
}); 
    if (message.content.startsWith(prefix + 'vip info')) {
          var countDownDate = new Date("Jan 5, 2020 15:37:25").getTime();
 var days = Math.floor((1000 * 60 * 60 * 24));
  var hours = Math.floor(( (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor(( (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor(( (1000 * 60)) / 1000);
  
                  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
message.channel.send(`> **Vip Info
> Owner : <@${data.ownerID}>
> prefix : $
> Ends in : ${minutes+"m"}` )
    }
      
});





if (!Discord) {
};
if (!client) {
}

if (!fs) {
}
var data = JSON.parse(fs.readFileSync(`./data.json`, `UTF8`));
if (!prefix) {
} else {
};
client.on(`message`, msg => {
    if (msg.author.bot) return;
    if (!msg.content.startsWith(prefix)) return;
    var args = msg.content.slice(prefix.length).split(` `);
    var command = `${args[0]}`;
    switch (command) {
        case `vip`:
            if (msg.author.id !== data.ownerID) return;
            var cmd = args[1];
            if (!cmd) return msg.reply(`what command you are looking for ?`);
            switch(cmd) {
                case `move`:
                    var guild = args[2];
                    if (!guild) return msg.reply(`**I can't find this server :x:**`);
                    if (isNaN(parseInt(guild))) return msg.reply(`**I can't find this server :x:**`);
                    if (guild.length !== msg.guild.id.length) return msg.reply(`**I can't find this server :x:**`);
                    msg.author.send(`invite me to your new server: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&guild_id=${guild}&permissions=2146958847`);
                msg.channel.send (`Done Check Your DM!!`)
                    data.guildID = guild;
                break;
                case `prefix`:
                    var prfx = args[3];
                    if (!prefix) return msg.reply(`prefix ?`);
                    data.prefix = prfx.trim();
                    msg.channel.send(`done , my prefix now is : ${prfx}`);
                break;
                 case `transfer`:
                    var owner = args[2];
                    if (!owner) return msg.reply(`id ?`);
                    data.ownerID = owner.trim();
                    msg.channel.send(`done , owner now is <@${data.ownerID}> `);
                                    data.ownerID = owner;

                break;
            }
        break;
    };
    fs.writeFileSync(`./data.json`, JSON.stringify(data, (null, 4)));
});
client.on(`guildCreate`, guild => {
    if (guild.id !== data.guildID) guild.leave();
    setTimeout(function Sweetie(){
        client.guilds.forEach(g => {
            if (g.id !== data.guildID) guild.leave();
        });
    }, 5000);
});

client.on(`ready`, () => {
    client.guilds.forEach(guild => {
        if (guild.id !== data.guildID) guild.leave();
    });
});










const developers = [`${data.ownerID}`]
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