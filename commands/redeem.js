const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');
const config = require('../config.json')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('redeem')
		.setDescription(`Redeem your cool role!`),
	async execute(interaction) {
    const RoleToAdd = interaction.guild.roles.cache.get(config.roleID);
	
	const exampleEmbed = new MessageEmbed()
	.setColor(config.embedColor)
	.setTitle(`Redeem Role`)
	.setDescription(`Congratulations, you now have the **${RoleToAdd.name}** role!`)
	.setThumbnail('https://cdn.discordapp.com/attachments/942989506209005600/947267234001219726/scammer-scam.gif')
	.setTimestamp();

    const exampleEmbed2 = new MessageEmbed()
	.setColor(config.embedColor)
	.setTitle(`Redeem Role`)
	.setDescription(`You already have the **${RoleToAdd.name}** role!`)
	.setThumbnail('https://cdn.discordapp.com/attachments/942989506209005600/947267234001219726/scammer-scam.gif')
	.setTimestamp();

    if (interaction.member.roles.cache.has(RoleToAdd.id)) { return interaction.reply({ embeds: [exampleEmbed2]});
    }
    
	interaction.member.roles.add(config.roleID);
	  
	interaction.reply({ embeds: [exampleEmbed]});
	},
};