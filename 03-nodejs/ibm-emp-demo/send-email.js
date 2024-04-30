import nodemailer from 'nodemailer';

// const transporter2 = nodemailer.createTransport({
//     host: 'mail.gmail.com',
//     port: 587, secure: true, service: 'Gmail',
//     auth: {
//         user: 'asdf', pass: 'lkj'
//     }
// });

const transporter = nodemailer.createTransport({
    host: 'smtp.mail.yahoo.com',
    port: 465, secure: true, service: 'yahoo',
    auth: {
        user: 'asdf', pass: 'lkj'
    }
});

// // basic code 
// const sendEmail = (mailInfo) => {
//     console.log(mailInfo);
//     const mailOptions = {
//         from: 'asdf@yahoo.com',
//         to: mailInfo.to,
//         subject: mailInfo.sebject,
//         text: mailInfo.text
//     };
//     transporter.sendMail(mailOptions);
// };

// // code with dynamic values  
// const sendEmail = (mailInfo) => {
//     console.log(mailInfo);
//     const mailOptions = {
//         from: 'asdf@yahoo.com',
//         to: mailInfo.to,
//         subject: mailInfo.sebject,
//         text: mailInfo.text
//     };
//     transporter.sendMail(mailOptions);
// };

// code with dynamic values and proper response   
const sendEmail = (mailProps) => {

    const mailOptions = {
        from: 'asdf@yahoo.com',
        to: mailProps.to,
        subject: mailProps.subject,
        text: mailProps.text
    };
    console.log(mailOptions);

    return new Promise((resolve, reject) => {
        try {
            const success = transporter.sendMail(mailOptions);
            console.log(success);
            resolve(success);
        }
        catch (error) {
            console.log(error);
            reject(error);
        }
    });
};


export { sendEmail };