          const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
    http.get(`http://acounts-shop.glitch.me/`);
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
const db = require('quick.db')
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










const cools = [];
let sfa = JSON.parse(fs.readFileSync('./sfa.json', 'utf8')); // الملف الي بتحط به الحسابات الفل داتا
let nfa = JSON.parse(fs.readFileSync('./nfa.json', 'utf8')); // الملف الي بتحط به الحسابات العاديه
let SFAP = 6000; /*سعر الحساب الواحد الفل داتا*/
let NFAP = 100; /*سعر الحساب الواحد العادي*/
let URID = '535864833380450374' //مين بيتحوله الكريديت// ahmeD_Hossam
client.on('message', async message => { // ahmeD_Hossam
    let bOn = await db.fetch(`bOn_${message.guild.id}`)
    if (message == prefix + 'stock') {
        let ahmed = 0;
        let hossam = 0; // ahmeD_Hossam

        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        sfa.forEach(acc => {
            if (!acc.email) return;  
            ahmed++;
        }); // ahmeD_Hossam
        nfa.forEach(acc => {
            if (!acc.email) return;
            hossam++;
        }); // ahmeD_Hossam // i will kill you soon ok ? xD
        message.channel.send(new Discord.RichEmbed().setTitle('💵 متجر اوريو 💵') // ahmeD_Hossam
            .addField('**[SFA | فل داتا] > **', `**${ahmed} Account(s)**`, true).addField('**[NFA | عادي] > **', `**${hossam} Account(s)  **`, true).setColor('GREEN') // ahmeD_Hossam
            .addField('**هل تعلم ؟**', `**\`[SFA]\` > فل داتا - حساب يمكنك اللعب وتغيير الاسم والباسوورد والسكن
\`[NFA]\` > العادي = حساب لا يمكنك تغيير اي شيئ فيه, للعب فقط**`) // ahmeD_Hossam
            .addField('**الاسعار**', `\`[1 SFA] > 8500 Credits ProBot\` \n \`[1 NFA] > 250 Credits ProBot\``) // ahmeD_Hossam
            .setFooter(`$buy [sfa/nfa] [الحسابات لا يوجد عليها ضمان | لشراء حساب الرجاء كتابة الأمر التالي [الكمية`))
    } // ahmeD_Hossam
    if (message.content.startsWith(prefix + 'buy')) { // ahmeD_Hossam
        if (bOn === "off") return message.reply("**Sorry, Buying mode are disabled**")

        let cmd = message.content.split(" ")[1]; // ahmeD_Hossam
        let args = message.content.split(" ")[2]; // ahmeD_Hossam
        if (!cmd || !args || isNaN(args)) return message.channel.send(`**استخدام خاطئ ّ! \n Correct Usage Example: $buy SFA 1**`); // ahmeD_Hossam
        if (cmd == 'sfa') { // ahmeD_Hossam
          if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 
            let ahmed = 0
            sfa.forEach(acc => {
                if (!acc.email) return;
                ahmed++;
            });
            if (ahmed < 1) return message.channel.send("لا يوجد حسابات")
            if (ahmed < args) return message.channel.send("لا يوجد حسابات كافية") // 
            message.author.send('✅ Nothing.. Just Check  If Your DM open or no').then(() => {
              // ahmeD_Hossam
              
              cools[message.author.id + message.guild.id] = {
                status: "on"
              };
              let P = Math.floor(args * (SFAP)) // ahmeD_Hossam
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
#credits <@${URID}> ${P}
لديك 3 دقائق قبل الالغاء.**`));
                let P2 = Math.floor(P - (P * (5 / 100))); // ahmeD_Hossam
                let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@${URID}> **`); // ahmeD_Hossam// ahmeD_Hossam
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => { // ahmeD_Hossam
                        let C = 0;
                        let Accs = []; // ahmeD_Hossam
                        sfa.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done,,\nNow Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
                return message.channel.send('**:x: Please Open Your DM**!')
            })
        }
        if (cmd == 'nfa') {
                    if (cools [message.author.id + message.guild.id] && cools [message.author.id + message.guild.id].status == "on")return message.reply("**لديك عملية شراء بل فعل.**"); 

            let hossam = 0;
            sfa.forEach(acc => {
                if (!acc.email) return;
                hossam++;
            })
            if (hossam < 1) return message.channel.send("لا يوجد حسابات")
            if (hossam < args) return message.channel.send("لا يوجد حسابات كافية")
            message.author.send('✅ Nothing.. Just Check If Your DM open or no').then(() => {
                let P = Math.floor(args * (NFAP)) // ahmeD_Hossam
                cools[message.author.id + message.guild.id] = {
                status: "on"
              };
                message.channel.send(new Discord.RichEmbed().setAuthor(message.author.tag, message.author.avatarURL).setColor('#918383')
                    .setDescription(`**اكتب الامر التالي لأكمال عمليه الشراء
  Ex : #credits <@${URID}> ${P2}
  لديك 3 دقائق قبل الالغاء.**`));
                let P2 = Math.floor(P - (P * (5 / 100)));
                let filter = response => response.author.id == "282859044593598464" && response.mentions._content.includes(`**:moneybag: | ${message.author.username}, has transferred \`$${P2}\` to <@${URID}> **  `)
                message.channel.awaitMessages(filter, {
                        maxMatches: 1,
                        time: 240000,
                        errors: ['time']
                    })
                    .then(collected => {
                        let C = 0;
                        let Accs = [];
                        nfa.forEach(acc => {
                            if (!acc.email) return;
                            if (C == args) return;;
                            Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                            C++;
                            delete acc.email;
                            delete acc.pass;
                            fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {
                                if (err) console.error(err)
                            })
                        });
                  delete cools [message.author.id + message.guild.id];
                        message.channel.send('**Done,,\nNow Check Your DM**!')
                        message.author.send(`Your Accs :)\`\`\`json\n${Accs.join("\n")}\n\`\`\`سيتم خذف الرساله بعد 5 دقائق !`).then(M => M.delete(5 * 60 * 1000))
                    });
            }).catch(err => {
                  delete cools [message.author.id + message.guild.id];
            })
        }
    }

    if (message.content.startsWith(prefix + 'add')) {


        if (message.author.id !== URID) return message.reply("** Only <@" + URID + "> can use this command.**");
        let type = message.content.split(" ")[1];
        let email = message.content.split(" ")[2];
        let pass = message.content.split(" ")[3];

        let types = ["sfa", "nfa", "send"]

        if (!email) return message.reply("Email?");
        if (!pass) return message.reply("Password !")
        if (type == "sfa") {
            let alt = {
                "email": `${email}`,
                "pass": `${pass}`
            }
            sfa.push(alt)
            fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                if (err) console.error(err)
            })

            message.reply("**Successfully adedd this account.**");


        } else if (type == "nfa") {
            nfa.push("email", email);
            nfa.push("pass", pass);
            fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {
                if (err) console.error(err)
            })

            message.reply("**Successfully adedd this account.**");


        } 
    }
    if (message.content.startsWith(prefix + 'give')) {

        let type = message.content.split(" ")[2];
        let args = message.content.split(" ")[3];
        let user = message.mentions.users.first()

        if (!user) return message.channel.send("**Please mention a user**")

        if (!type) return message.channel.send("Please input a alt type")
        if (!args[0]) return message.reply("ضع الكمية !")
        if (type === "sfa") {
            let C = 0;
            let Accs = []; // ahmeD_Hossam
            sfa.forEach(acc => {

                if (!acc.email) return;
                if (C == args) return;;
                Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                C++; // ahmeD_Hossam// ahmeD_Hossam
                delete acc.email;
                delete acc.pass;

                fs.writeFile("./sfa.json", JSON.stringify(sfa), (err) => {
                    if (err) console.error(err)
                }) // ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam
            });
            message.channel.send('**Done**')
            user.send(`${message.author.username} has been gifted you a sfa account \n \`\`\`${Accs.join("\n")}\`\`\` `).then(M => M.delete(5 * 60 * 1000))

        }

        if (type === "nfa") {
            let C = 0;
            let Accs = []; // ahmeD_Hossam
            nfa.forEach(acc => {

                if (!acc.email) return;
                if (C == args) return;;
                Accs.push(`Email: ${acc.email} | pass: ${acc.pass}`);
                C++; // ahmeD_Hossam// ahmeD_Hossam
                delete acc.email;
                delete acc.pass;

                fs.writeFile("./nfa.json", JSON.stringify(nfa), (err) => {
                    if (err) console.error(err)
                }) // ahmeD_Hossam// ahmeD_Hossam// ahmeD_Hossam
            });
            message.channel.send('**Done**')
            user.send(`${message.author.username} has been gifted you a nfa account \n \`\`\`${Accs.join("\n")}\`\`\` `).then(M => M.delete(5 * 60 * 1000))

        }

    }

})






