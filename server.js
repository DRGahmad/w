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

 
const db = require("quick.db"); // ثبت بكج ذا عن طريق npm i quick.db
client.on("message", async message => {
    const prefix = "$";
    let tMsg = await db.fetch(`tMsg_${message.guild.id}`) 
      if(tMsg === null) tMsg = "Welcome, Please wait some time for stuff to come and help you :D"; // هاذي الرسالة الافتراضية

 
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;

 
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();

    if(cmd === "set-msg") {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("يجب عليك امتلاك صلاحيات MANAGE_SERVER");

      let msg = args.join(" ");
            db.set(`tMsg_${message.guild.id}`, msg);
            let embed = new RichEmbed()
            .setTitle("Ticket Message has been set")
            .setDescription(msg);

            message.channel.send(embed)
     
    
 
    }

   //// الحين حط مكان الرسالة الي في امر التكت حقك ذا tMsg وبس
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
              const tMsg = await db.fetch(`tMsg_${message.guild.id}`) 
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
                .addField("Hello !", tMsg)
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












client.on("message", message => { // تقديم اداره
  if(message.content.startsWith("$apply")) {
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
          if(message.content.startsWith("$accept")) {
          if(!message.channel.guild) return
          let acRoom = message.guild.channels.find('name', 'apply1');
          if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
          if(!mention) return message.reply("Please Mention");
         
          acRoom.send(`> اهلا بك تم قبولك ك اداري في السيرفر \n ${mention} Discord staff - :partying_face: `)
          }
        });

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith("$refusal")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find('name', 'apply1');
  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;
  if(!mention) return message.reply("Please Mention");
 
  acRoom.send(`> نعتذر منك تم رفضك محاولة اخرى في وقت لاحق \n ${mention} - :pleading_face: `)
  }
});


