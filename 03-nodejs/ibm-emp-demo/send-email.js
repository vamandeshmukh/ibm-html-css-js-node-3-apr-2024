import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465,
    secure: true,
    service: 'yahoo',
    auth: {
        user: 'asdf',
        pass: 'lkj'
    }

});

const sendEmail = () => {

    const mailOptions = {
        from: 'asdf@yahoo.com',
        to: '',
        subject: '',
        text: ''
    };

    transporter.sendMail(mailOptions);

};

export { sendEmail };