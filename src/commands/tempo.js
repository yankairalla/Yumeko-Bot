module.exports = {
    name: "time",
    description: "Data de hoje",
    execute(message, args) {

        const date = new Date();

        const diasSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado'];

        const diaAtual = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;

        const horario = `${date.getHours()}:${date.getMinutes()}`

        return message.channel.send(`Hoje é ${diasSemana[date.getDay()]} dia ${diaAtual} e o horario é ${horario}`)
    }

