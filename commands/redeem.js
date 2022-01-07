const Discord = require("discord.js")
const config = require('../config.json')
module.exports.run = async(client, message, args) => {
    const RoleToAdd = message.guild.roles.cache.get(config.roleID);
    const Filter = (reaction, user) => user.id == message.author.id;
    const Embed = new Discord.MessageEmbed()
         .setColor(config.embedColor)
         .setTitle(`Redeem Role`)
         .setDescription(`React to get the **${RoleToAdd.name}** role!`)
         .setThumbnail('https://tenor.com/view/scammer-scam-redeeming-whyareyouredeeming-kitboga-gif-19964723')
     const reactionMessage = await message.channel.send(Embed);
     await reactionMessage.react("✅");
     reactionMessage.awaitReactions(Filter, { max: 1, time: 30000, errors: ["time"] }).then(collected => {
         const reaction = collected.first();
         switch (reaction.emoji.name) {
             case "✅":
                 if (message.member.roles.cache.has(RoleToAdd.id)) { return message.channel.send(`You already have the ${RoleToAdd.name} role!`) };
                 message.member.roles.add(RoleToAdd).then(message.channel.send(`You now have the ${RoleToAdd.name} role!`));
                 break
         }
     })
}