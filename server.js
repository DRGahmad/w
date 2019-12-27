const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://roe-sprint.glitch.me/`);
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






client.on('message', message => {
           var y = client.emojis.find(emoji => emoji.name === "yes")
          var n = client.emojis.find(emoji => emoji.name === "no")
          var p = client.emojis.find(emoji => emoji.name === "public")
  if(message.content.startsWith(prefix + 'bc')) {
            if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1).join(" ");
  if(!args) return message.channel.send(`**${n} please type the broadcast message**`)
  let filter = m => m.author.id == message.author.id
  let broadcastt = new Discord.RichEmbed()
  .setColor('#04ebf3')
  .addField(`**[1] broadcast for all members\n\n[2] broadcast for online members\n\n[0] to cancel**`,`** **`)
  message.channel.send(broadcastt).then(msg => {
  message.channel.awaitMessages(filter, {
    max: 1,
    time: 90000,
    errors: ['time']
  })
  .then(collected => {
    if(collected.first().content === '1') {
      message.channel.bulkDelete(1)
  message.channel.send(`**Broadcast begin send to \`${message.guild.members.size}\` members${y}**`);
  msg.delete()
     return message.guild.members.forEach(m => {
  m.send(args.replace('[user]', m))
      })
  }
  if(collected.first().content === '2') {
    msg.delete()
    message.channel.bulkDelete(1)
    message.channel.send(`**Broadcast begin send to \`${message.guild.members.filter(m=>m.presence.status == 'online').size}\` members${y}**`);
  message.guild.members.filter(m => m.presence.status === 'online').forEach(m => {
    m.send(args.replace('[user]', m)) 
  })
  message.guild.members.filter(m => m.presence.status === 'dnd').forEach(m => {
    m.send(args.replace('[user]', m)) 
  })
  return message.guild.members.filter(m => m.presence.status === 'idle').forEach(m => {
    m.send(args.replace('[user]', m)) 
  })
    }
  if(collected.first().content === '0') {
    message.channel.bulkDelete(1)
    msg.delete()
    return message.channel.send(`**Broadcast Has Been Canceld**`);
  }})})}
  
  
  
  });



let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 10;/*سعر الحساب الواحد الفل داتا*/let NFAP = 12;/*سعر الحساب الواحد العادي*/let URID = '603456072954544141'//
client.on('message',async message => {// 
  
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  const devloper = ["603456072954544141"] 
  if(message.content.startsWith(prefix+'add')){
              // if (!devloper.includes(message.author.id)) return message.channel.send("<@603456072954544141> بس يقدر يستعمله");
    let email = args[0];
    let pass = args[1];
    let accType = args[2]

    if(!email || !pass) return message.reply(":x: -| ضع الحسابات المرادة");
    if(!accType) return message.reply("يجب عليك وضع نوع الحساب \`SFA, NFA\`")
        if(accType === "SFA") {
        
          message.channel.send(`Done !!`)
          
          fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => { // عادي حطها ترا ال // تخلي القارئ ما يقرا الكو
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
        }  
    if(accType === "NFA") {
                  message.channel.send("تم اضافة حسابات عادية")

    }

  }
if(message.content.startsWith(prefix+'stock')){
let m7 = 0;let mahdi = 0;
  sfa.forEach(acc =>{if(!acc.email) return;m7++;});
  nfa.forEach(acc =>{if(!acc.email) return;mahdi++;});
  message.channel.send(new Discord.RichEmbed().setTitle(':dollar: Orio Host Shop')
  .addField('SFA [فل داتا]:',`${m7} Account(s)`,true)  .addField('**NFA [عادي]:**',`${mahdi} Account(s)`,true).setColor(message.guild.me.highestRole.hexColor === "#000000" ? "#ffffff" : message.guild.me.displayHexColor)// 
.addField('معلومه:',`[SFA] => بمعني فل داتا - يمكن تغير الاسم والرمز والسكن فقط
[NFA] => يعني حسابات عاديه - لا يمكن تغير اي شئ فقط اللعب بها`)
.addField('الاسعار:',`[1xSFA] => ${SFAP} Credits ProBot\n[1xNFA] => ${NFAP} Credits ProBot`)
.setFooter(`${prefix}buy [SFA/NFA] [الحسابات لا يوجد عليها ضمان | لشراء حساب الرجاء كتابه الامر التالي [الكميه`) )}
if(message.content.startsWith(prefix+'buy')){
let cmd = message.content.split(" ")[1];
let args = message.content.split(" ")[2];
if(!cmd || !args || isNaN(args)) return message.channel.send(`**USE: ${prefix}buy [SFA/NFA]  [الكميه]**`);
if(cmd == 'SFA') {
message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(()=>{//
let P = Math.floor(args*(SFAP))
message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor(message.member.highestRole.hexColor === "#000000" ? "#ffffff" : message.member.displayHexColor)
.setDescription(`**]اكتب الامر التالي لأكمال عمليه الشراء
\`#credits <@${URID}> ${P}\`
لديك 3 دقائق قبل الالغاء.**`));
let P2 = Math.floor(P-(P*(5/100)));
let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$1\` to <@603456072954544141> **`)
.then( collected =>{
let C = 0;let Accs = [];
sfa.forEach(acc =>{if(!acc.email) return;if(C == args)return;;Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);C++;
delete acc.email;delete acc.pass;
fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {if (err) console.error(err)})
});message.channel.send('**Done,,\nNow Check Your DM**!')
message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M =>M.delete(5*60*1000))
});}).catch(err=>{return message.channel.send('**:x: Please Open Your DM**!')}) }
if(cmd == 'NFA') {
  message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(()=>{
  let P = Math.floor(args*(NFAP))
  message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor('GREEN')
  .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
  \`#credits <@${URID}> ${P}\`
  لديك 3 دقائق قبل الالغاء.**`));
  let P2 = Math.floor(P-(P*(5/100)));
  let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$1\` to <@603456072954544141> **`);
  message.channel.awaitMessages(filter, { maxMatches: 1, time: 240000, errors: ['time'] })
  .then( collected =>{
  let C = 0;let Accs = [];
  nfa.forEach(acc =>{if(!acc.email) return;if(C == args)return;;Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);C++;
  delete acc.email;delete acc.pass;
  fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {if (err) console.error(err)})
  });message.channel.send('**Done,,\nNow Check Your DM**!')
  message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M =>M.delete(5*60*1000))
  });}).catch(err=>{return message.channel.send('**:x: Please Open Your DM**!')}) } }
})




