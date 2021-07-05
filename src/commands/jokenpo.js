module.exports = {
    name: "jokenpo",
    description: "Jogar jokenpo?",
     execute(message, args) {
        const choices = ['pedra', 'papel', 'tesoura'];
        const botChoice = choices[Math.floor(Math.random() * 2)];

        const userChoice = args[0];

        if (choices.includes(userChoice)) {
            if (userChoice === botChoice) {
                return message.reply("Eita!, houve um empate!");
            }
            if (botChoice === 'pedra') {
                if (userChoice === "tesoura") {
                    return message.reply(`Você perdeu! Eu escolhi **${botChoice}**`);
                }
                return message.reply(`Você ganhou! Eu escolhi **${botChoice}**`);
            }
            if (botChoice === 'tesoura') {
                if (userChoice === "papel") {
                    return message.reply(`Você perdeu! Eu escolhi **${botChoice}**`);
                }
                return message.reply(`Você ganhou! Eu escolhi **${botChoice}**`);
            }
            if (botChoice === 'papel') {
                if (userChoice === "pedra") {
                    return message.reply(`Você perdeu! Eu escolhi **${botChoice}**`);
                }
                return message.reply(`Você ganhou! Eu escolhi **${botChoice}**`);
            }
        }
        return message.reply(`Este argumento ${userChoice} é invalido!`);
    }
}

