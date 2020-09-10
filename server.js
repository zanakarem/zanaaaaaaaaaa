const Discord = require('discord.js');
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "丨𝖦𝗋𝖾𝖾𝗍𝗂𝗇𝗀");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField("🎽 | ناو :  ", `${member}`)
    .addField("📢 | بەخێربێی دڵەكەم", `بەخێربێی بۆ سێرڤەرەكەمان, ${member}`)
    .addField("🆔 | مێمبەر :", "**[" + `${member.id}` + "]**")
    .addField("|تۆکەسی ژمارە", `${member.guild.memberCount}`)
    .setImage(
      "https://cdn.discordapp.com/attachments/658261548510216215/693821412456267876/welcomeanimationdribbble.gif"
    )
    .addField("ناو:", `<@` + `${member.id}` + `>`, true)

    .addField(" ناوی سێرڤەر", `${member.guild.name}`, true)

    .setFooter(`${member.guild.name}`)
    .setTimestamp();

  channel.sendEmbed(embed);
}); //3APCE

client.on("guildMemberRemove", member => {
  //3APCE
  var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(` داوەشێی بۆ لێفتت کرد :skin-tone-1: `)
    .setDescription(`لە قەبرت بم:skin-tone-1: `)
    .addField("مێمبەر بووە", `**[ ${member.guild.memberCount} ]**`, true)
    .setColor("RANDOM")
    .setFooter(
      `====بە ھیوای کاتێکی خۆش ====`,
      "https://cdn.discordapp.com/attachments/694348266766204938/695404592506077236/image0.png"
    );

  var channel = member.guild.channels.find("name", "leave");
  if (!channel) return;
  channel.send({ embed: embed }); //FOG
});




client.on("ready", () => {
  
  let statuses = [`zana up`,`create by zana k majued `,`viper up`]
 
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/CAMPERpaywand"
    });
  }, 2000);
});


client.on("ready", () => {
  
  let statuses = [`viper up`,`zana up`,`creat by zanaq k majed`]
 
  setInterval(function() {
    let STREAMING = statuses[Math.floor(Math.random() * statuses.length)];
    client.user.setActivity(STREAMING, {
      type: "STREAMING",
      url: "https://www.twitch.tv/CAMPERpaywand"
    });
  }, 2000);
});






















     client.on('message', message => {
 
if(message.content.includes("@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("خۆت سوک کرد وللە بە شتەکم دانابوی بەس نەم زانی ئاوا سوک و چروکی")
}
 
}
 
});
 
 
client.on('message', message => {
 
if(message.content.includes("@everyone@everyone")){
if(!message.member.hasPermission('KICK_MEMBERS')){
message.delete(); 
message.reply("شتی وا هەیە ئێڤری وەن لێدەی ")
}
 
}
 
});                        





client.login('NzM1MjQ1Mzg1NjcyNjg3NzE5.XxdcoA.2B6T4M-rQOOzeLYjNbpoVCIGdhs');