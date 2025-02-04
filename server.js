// Importando as dependências
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Criando a aplicação express
const app = express();
const port = 3000;

// Middleware para permitir requisições do front-end
app.use(express.json());
app.use(cors());  // Permite requisições de qualquer origem

// Configuração do Nodemailer para envio de e-mails
const transporter = nodemailer.createTransport({
    service: 'gmail',  // Ou qualquer outro serviço que você queira usar
    auth: {
        user: '',  // Substitua pelo seu e-mail
        pass: '', // Substitua pela sua senha de aplicativo gerada no Gmail
    },
});

// Rota para o envio do e-mail
app.post('/send-email', (req, res) => {
    const { to, subject, body } = req.body;  // Dados do e-mail

    const mailOptions = {
        from: '',  // O e-mail de envio
        to: to,  // E-mail do destinatário
        subject: subject,  // Assunto do e-mail
        text: body,  // Corpo do e-mail
    };

    // Enviar e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Erro ao enviar o e-mail');
        } else {
            console.log('E-mail enviado: ' + info.response);
            res.status(200).send('E-mail enviado com sucesso');
        }
    });
});

// Iniciando o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
