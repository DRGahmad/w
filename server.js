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




   // 

                
    client.on("message", async message => {

     
    });


//كود للتجربة 

client.on('message', message => {
    if (message.content === '$ping') {
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
    let db = require("quick.db");
      let cate = await db.fetch(`ticketsCategory_${message.guild.id}`)  
    let prefix ='$'; // ضع البرفكس مكان رقم 1

if(message.author.bot) return;
if(message.channel.type === "dm") return;
if (!message.content.startsWith(prefix)) return;
let messageArray = message.content.split(" ");
let cmd = messageArray[0];
let argss = messageArray.slice(1);
      
        if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) {
  return message.reply(` **-| يجب عليك اعطائي صلاحية MANAGE CHANNELS**`)
      .then(m => m.delete(5000));
}
        if(cmd === `${prefix}asdoidioh101h11d*1d21d/1d2-1*1d-21d-21*1d2-2d1*d-21d`) {
            if(!argss[0]) return message.reply(`**يرجى وضع ايدي القسم المراد نقل الروم اليه**`);
              if(isNaN(argss[0])) return message.reply(`**هذا الايدي غير صالح**`);

db.set(`ticketsCategory_${message.guild.id}`, argss[0])
        message.channel.send(`Done, Tickets now will open in <#${argss[0]}>`)
          
        }
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
            c.setParent(cate);
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
            .then(newChannel => message.channel.send(`**Successfully changed the ticket name to \`${three}\`**`))
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
                        .setDescription(`**Your Ticket in \`Orio Host\` has been closed!
 \`\`\`#${message.channel.name}\`\`\`\
Deleted By: <@${message.author.id}> \`|\` Opened By: <@${ticketInfos[message.guild.id+message.channel.id].by}>
Reason : ${Reason}**`)
                        .setTimestamp()
                        .setFooter(message.author.tag)
                    let log = message.guild.channels.find("name", "tickets-log");
                    if (log) log.send(closee)
                    message.author.send(closee);
                    client.users.get(ticketInfos[message.guild.id + message.channel.id].by).send(closee)
              delete ticketInfos[message.guild.id + message.channel.id];
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












let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 8500;/*سعر الحساب الواحد الفل داتا*/let NFAP = 250;/*سعر الحساب الواحد العادي*/let URID = '432231487916736542'//مين بيتحوله الكريديت// ahmeD_Hossam
client.on('message',async message => {// ahmeD_Hossam
if(message == prefix+'stock') {let ahmed = 0;let hossam = 0;// ahmeD_Hossam
  sfa.forEach(acc =>{if(!acc.email) return;ahmed++;});// ahmeD_Hossam
  nfa.forEach(acc =>{if(!acc.email) return;hossam++;});// ahmeD_Hossam // i will kill you soon ok ? xD
  message.channel.send(new Discord.RichEmbed().setTitle('💵 متجر اوريو 💵')// ahmeD_Hossam
  .addField('**[SFA | فل داتا] > **',`**${ahmed} Account(s)**`,true)  .addField('**[NFA | عادي] > **',`**${hossam} Account(s)  **`,true).setColor('GREEN')// ahmeD_Hossam
.addField('**هل تعلم ؟**',`**\`[SFA]\` > فل داتا - حساب يمكنك اللعب وتغيير الاسم والباسوورد والسكن
\`[NFA]\` > العادي = حساب لا يمكنك تغيير اي شيئ فيه, للعب فقط**`)// ahmeD_Hossam
.addField('**الاسعار**',`\`[1 SFA] > 8500 Credits ProBot\` \n \`[1 NFA] > 250 Credits ProBot\``)// ahmeD_Hossam
.setFooter(`$buy [sfa/nfa] [الحسابات لا يوجد عليها ضمان | لشراء حساب الرجاء كتابة الأمر التالي [الكمية`) )}// ahmeD_Hossam
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
#credits <@603456072954544141> ${P}
لديك 3 دقائق قبل الالغاء.**`));// ahmeD_Hossam
let P2 = Math.floor(P-(P*(5/100)));// ahmeD_Hossam
let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@603456072954544141> **`);// ahmeD_Hossam// ahmeD_Hossam
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
  let P = Math.floor(args*(NFAP))// ahmeD_Hossam
  message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag,message.author.avatarURL).setColor('#918383')
  .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
  Ex : #credits <@603456072954544141> ${P2}
  لديك 3 دقائق قبل الالغاء.**`));
  let P2 = Math.floor(P-(P*(5/100)));
  let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@603456072954544141> **  `)
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
    if (message.content.startsWith(prefix + 'help')) {
message.author.send(`Support Server : discord.gg/msnc3ZD

> This bot has been registered for <@${data.ownerID}>
                   ` )
    }
});



client.on('message',message => {
    if (message.content.startsWith(prefix + 'vip info')) {
                  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
message.channel.send(`> **Vip Info
> Owner : <@${data.ownerID}>
> prefix : ${data.prefix}**
                   ` )
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
                    msg.author.send(`**Invite me to your new server: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&guild_id=${guild}&permissions=2146958847**`);
                                                msg.channel.send (`Done Check Your DM!!`)

                
                    data.guildID = guild;
                break;
                
                break;
                 case `transfer`:
                    var owner = args[2];
                    if (!owner) return msg.reply(`id ?`);
                    data.ownerID = owner.trim();
                    msg.channel.send(`done , owner now is ${data.ownerID} `);
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





client.login(`${data.token}`);
