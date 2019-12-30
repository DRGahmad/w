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


  






const category = "580187816063926293";
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
        if(mtickets === false) return message.channel.send(`:tools: , **تم ايقاف هذه الخاصية من قبل احد ادارة السيرفر**`);
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`:tools: , **البوت لا يملك صلاحيات لصنع الروم**`);
		console.log(current);
		let openReason = "";
		current++;
    	message.guild.createChannel(`ticket-${current}`, 'text').then(c => {
		tchannels.push(c.id);
		c.setParent(category);
		message.channel.send(`**:tickets: تم عمل التكت.**`);
		c.overwritePermissions(message.guild.id, {
			READ_MESSAGES: false,
			SEND_MESSAGES: false
		});
		c.overwritePermissions(message.author.id, {
			READ_MESSAGES: true,
			SEND_MESSAGES: true
		});
		
		if(args[1]) openReason = `\nسبب فتح التكت , " **${args.slice(1).join(" ")}** "`;
		let embed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setColor("#36393e")
		.setDescription(`**انتظر قليلا الى حين رد الادارة عليك**${openReason}`);
		c.send(`${message.author}`);
		c.send(embed);
	});
    } else if(args[0].toLowerCase() === `${prefix}mtickets`) {
        if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:tools: , **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(args[1] && args[1].toLowerCase() === "enable") {
			mtickets = true;
			message.channel.send(`:white_check_mark: , **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
		} else if(args[1] && args[1].toLowerCase() === "disable") {
			mtickets = false;
			message.channel.send(`:white_check_mark: , **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
		} else if(!args[1]) {
			if(mtickets === true) {
			mtickets = false;
			message.channel.send(`:white_check_mark: , **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
			} else if(mtickets === false) {
			mtickets = true;
			message.channel.send(`:white_check_mark: , **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
			}
		}
    } else if(args[0].toLowerCase() === `${prefix}close`) {
		if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:tools:, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
		if(!message.channel.name.startsWith('ticket-') && !tchannels.includes(message.channel.id)) return message.channel.send(`:tools:, **هذا الروم ليس من رومات التكت.**`);
		
		message.channel.send(`:white_check_mark:, **سيتم اغلاق الروم في 3 ثواني من الاَن.**`);
		tchannels.splice( tchannels.indexOf(message.channel.id), 1 );
		setTimeout(() => message.channel.delete(), 3000);
	} else if(args[0].toLowerCase() === `${prefix}restart`) {
		if(!devs.includes(message.author.id)) return message.channel.send(`:tools:, **أنت لست من ادارة السيرفر لأستخدام هذا الأمر.**`);
		message.channel.send(`:white_check_mark:, **جارى اعادة تشغيل البوت.**`);
		client.destroy();
	} else if(args[0].toLowerCase() === `${prefix}closeall`) {
		let iq = 0;
		for(let q = 0; q < tchannels.length; q++) {
			let c = message.guild.channels.get(tchannels[q]);
			if(c) {
				c.delete();
				tchannels.splice( tchannels[q], 1 );
				iq++;
			}
			if(q === tchannels.length - 1 || q === tchannels.lengh + 1) {
				message.channel.send(`:white_check_mark:, **تم مسح \`${iq}\` من التكتات.**`);
			}
		}
	}
});

client.on("message", message => {
	var prefix = "-";
 if (message.content === "-help") {
  const embed = new Discord.RichEmbed()  
      .setColor("#8325c0") 
      .setDescription(`
	  
	       Help Commands: 
			 
${prefix}new ⥨ لفتح تيكيت 
${prefix}close ⥨ لاقفال تيكيت  
${prefix}mtickets/enable/disable ⥨ للايقاف فتح التيكتات او لفتح خاصية التيكتات
${prefix}rename ⥨ لتغير اسم التيكيت
${prefix}closeall⥨لقفل جميع التيكتات
`)
   message.channel.sendEmbed(embed)
    
   }
   }); 


client.on('message', message => {    
    var prefix = "-";
            if (message.content.startsWith(prefix + "rename")) {
                if(!message.channel.guild) return;
                if (!message.member.hasPermission("MANAGE_CHANNEL"))  return;
      var a= message.content.split(' ').slice(1).join("  ");
      if (!a) return message.reply("Example `-rename Light`")
      message.channel.setName(`${a}`)
      .then(newChannel => message.channel.send(`تم تغير اسم التيكيت الــى [**${a}**]`))
      .catch(console.error);
            }
        });
