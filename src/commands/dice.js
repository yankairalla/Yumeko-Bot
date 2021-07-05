module.exports = {
    name: "dice",
    description: "Jogar dado",
    execute(message, args) {
        const num = Math.floor(Math.random() * +args[0]);

        if (typeof num === 'number') {
            return message.channel.send(`O número que caiu foi ${num}`)

        }
        return message.channel.send('Isso realmente é um número?')
    }
}

