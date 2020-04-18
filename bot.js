const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`OFFICIAL TACTU.CC BOT || type %help for help"`);
});

client.on('message', message => {
    if(message.channel.name === "dll") {
        if(message.content.startsWith(prefix + 'dll'))
        {
            const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**Onetap Crack Dll!**')
            .addField('`Download:`', 'https://anonfiles.com/jbIbqbq9o2/OTC_dll')
            .addField('**Pentru a lua config-uri pentru Onetap crack, duceti-va pe #onetap-crack-cfgs si scrieti:**', '`%otc`')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.author.send(helpembed);
            message.delete();
        }
    }
});

client.on('message', message => {
    if(message.channel.name === "dll") {
        if(message.content.startsWith(prefix + 'addon'))
        {
            const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**Onetap Crack Addon**')
            .addField('`Download:`', 'https://anonfile.com/pb2br3q5o3/Addon_1.5.7_dll')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.author.send(helpembed);
            message.delete();
        }
    }
});
client.on('message', message => {
    if(message.channel.name === "dll") {
        if(message.content.startsWith(prefix + 'inj'))
        {
            const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**Injector undetectabil**')
            .addField('`Download:`', 'https://anonfile.com/x128r2qdo4/ProjectInfinityInjector_exe')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.author.send(helpembed);
            message.delete();
        }
    }
});

client.on('message', message => {
        if(message.content.startsWith(prefix + 'skemaionel'))
        {
            const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**TACTU.CC BOT**')
            .addField('`Onetap Crack DLL`', '`%dll - Iei cea mai actualizata versiune de OTC. (Se poate folosi doar pe #dll)`',)
            .addField('`Onetap Crack Cfg`', '`%otc - Iei config-urile oficiale tactu.cc (Se poate folosi doar pe #onetap-crack-cfgs)`')
            .addField('`Injector undetectabil`', '`%inj - Iti da un injector care nu e detectabil. (Se poate folosi doar pe #dll)`')
            .addField('`Onetap Addon`', '`%addon - Iti da ultima versiune de addon (se poate folosi doar pe #otc-addon-features)`')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.reply(helpembed)
        }
});

client.on('message', message => {
    if(message.channel.name === "onetap-crack-cfgs") {
        if(message.content.startsWith(prefix + 'otc'))
        {
            const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**Config-uri pentru: Onetap Crack!**')
            .addField('`Configurile oficiale tactu.cc`', 'https://anonfiles.com/x5a1rbq9o8/pipo-tactucc_rar')
            .addField('`Configurile ale lui andrei.exe`', 'https://anonfiles.com/v1i2r1q5o7/andreiexe_rar')
            .addField('`Config-ul lui stephan (SCOUT)`', 'https://anonfiles.com/J182ubqcoa/skeet_cfg')
            .addField('**Pentru a lua dll-ul de la Onetap crack, duceti-va pe #dll si scrieti:**', '`%dll`')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.author.send(helpembed);
            message.delete();
        }
    }
});

client.on('message', message => {
    if(message.channel.name === "dll") {
        if(message.content != "%dll" && message.content != "%inj")
        message.delete();
        const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**TACTU.CC BOT**')
            .addField('`Onetap Crack DLL`', '`%dll - Iei cea mai actualizata versiune de OTC. (Se poate folosi doar pe #dll)`',)
            .addField('`Onetap Crack Cfg`', '`%otc - Iei config-urile oficiale tactu.cc (Se poate folosi doar pe #onetap-crack-cfgs)`')
            .addField('`Injector undetectabil`', '`%inj - Iti da un injector care nu e detectabil. (Se poate folosi doar pe #dll)`')
            .addField('`Onetap Addon`', '`%addon - Iti da ultima versiune de addon (se poate folosi doar pe #otc-addon-features)`')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.author.send(helpembed);
    }
});

client.on('message', message => {
    if(message.channel.name === "onetap-crack-cfgs") {
        if(message.content != "%otc")
        message.delete();
        if(message.content === 'https://i.postimg.cc/J4DxMymD/screenshot-37.png')
        return;
        const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**TACTU.CC BOT**')
            .addField('`Onetap Crack DLL`', '`%dll - Iei cea mai actualizata versiune de OTC. (Se poate folosi doar pe #dll)`',)
            .addField('`Onetap Crack Cfg`', '`%otc - Iei config-urile oficiale tactu.cc (Se poate folosi doar pe #onetap-crack-cfgs)`')
            .addField('`Injector undetectabil`', '`%inj - Iti da un injector care nu e detectabil. (Se poate folosi doar pe #dll)`')
            .addField('`Onetap Addon`', '`%addon - Iti da ultima versiune de addon (se poate folosi doar pe #otc-addon-features)`')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.author.send(helpembed);
    }
})

client.on('message', message => {
        if(message.content.startsWith(prefix + 'help'))
        {
            const helpembed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('**TACTU.CC BOT**')
            .addField('`Onetap Crack DLL`', '`%dll - Iei cea mai actualizata versiune de OTC. (Se poate folosi doar pe #dll)`',)
            .addField('`Onetap Crack Cfg`', '`%otc - Iei config-urile oficiale tactu.cc (Se poate folosi doar pe #onetap-crack-cfgs)`')
            .addField('`Injector undetectabil`', '`%inj - Iti da un injector care nu e detectabil. (Se poate folosi doar pe #dll)`')
            .addField('`Onetap Addon`', '`%addon - Iti da ultima versiune de addon (se poate folosi doar pe #otc-addon-features)`')
            .setFooter('Creat de stephan#9290, pentru tactu.cc')
            .setThumbnail('https://cdn.discordapp.com/icons/696082765103366234/8549f6da3692d0d9bce4ee01c5460682.webp?size=128')
            message.delete();
            message.author.send(helpembed);
        }
});

client.login(process.env.BOT_TOKEN);
