const Discord = require('discord.js');
const db = require('quick.db');//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS

exports.run = async (client, message, args) => { 

if(db.fetch(`bakimmod`)) {

  if(message.author.id !== "1069869145409212416") return message.channel.send('```Şuanlık Discord Botumuz Bakımdadır Lütfen Bir Kaç Saat Sonra Tekrar Deneyiniz Veya ⚘ ! YUSUŦ ΞЛΞS ᵈᵃʳᵏ#0001 Bana Ulaşın```')

}

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "dd!";
  const embed = new Discord.MessageEmbed()

let yardım = new Discord.MessageEmbed()  
.setColor('#e7000e')//Bu Altyapı yDarKDayS Tarafından Yapılmıştır https://www.youtube.com/c/yDarKDayS
.addField('Lexy Davet',`

**Beni Ekliyecegin İçin Çok Teşekkürler**

`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=1073393528803180614&scope=bot%20applications.commands&permissions=2146958847) - [Destek Sunucumuz](https://discord.gg/bedavapanel)", )
    .setImage("")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['invite'],
  permLevel: 0
};

exports.help = {
  name: "davet",
  category: "davet-et",
    description: "Bot Davet Komutları Gösterir."
};