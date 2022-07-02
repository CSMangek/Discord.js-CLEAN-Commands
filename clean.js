module.exports = {
    name: 'CLEAN',
    description: 'Clean Messages!',
    async execute(message, args){
        if(message.member.roles.cache.has ('The role that has permission to the command')){
          if(!args[0]) return message.reply('Ingrese la cantidad de mensajes que desea eliminar');
          if(isNaN(args[0])) return message.reply('Enter a real number!');
          if(args[0] > 100) return message.reply("You can't delete more than 100 messages");
          if(args[0] < 1) return message.reply("You must delete at least one message");
          await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
          });
        }else {
            message.channel.send('You do not have permissions to use this command');
        }
    }
}