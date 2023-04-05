const nodemailer =  require('nodemailer');
const path = require('path');
const ejs = require('ejs')
const fs = require('fs');
const pdf = require("pdf-creator-node");




// const sendMailOption = async (template , data) =>{
//     const templatePath = path.join(__dirname, `../template/${template}.ejs`);

//     const data =  await ejs.renderFile(templatePath);
//     const transposter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             type : "login",
//             user: "noreply.jobportal1775@gmail.com",
//             pass: "uxutmrcsuvqqkgzc",
//         },
//     });

//     // let content = '';
//     // content += `
//     //     <div style="padding: 10px; background-color: #003375">
//     //         <div style="padding: 10px; background-color: white;">
//     //             <h4 style="color: #0085ff">Gửi mail với nodemailer và express</h4>
//     //             <span style="color: black">Đây là mail test</span>
//     //         </div>
//     //     </div>
//     // `;

//     let optionsMail = {
//         from: 'noreply.jobportal1775@gmail.com',
//         to: 'apolo9220@gmail.com',
//         text: 'Your text is here',
//         html: data
//     }
//     transposter.sendMail(optionsMail, (err, info)=>{
//         if (err) {
//             console.log(err);
//             // req.flash('mess', 'Lỗi gửi mail: '+err); //Gửi thông báo đến người dùng
//             // res.redirect('/');
//             return res.json({code : 400 , message : err.message})
//         } else {
//             return res.json({code : 200 , message : "Đã gửi mail thành công"})
//             // req.flash('mess', 'Một email đã được gửi đến tài khoản của bạn'); //Gửi thông báo đến người dùng
//             // res.redirect('/');
//         }
//     });

// }




const sendMail = async (template , dataSendMail) =>{
    // đường dẫn đến mẫu mail
    const templatePath = path.join(__dirname, `../../Template/${template}.html`);

    // Dữ liệu kèm theo để tiến hành gửi mail đến với nội dung ta thiết lập
    let {to_mail , subject , data}= dataSendMail

    const mailTemplate =  await ejs.renderFile(templatePath , data);
    // Trạm mail của server
    const transposter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type : "login",
            user: "noreply.jobportal1775@gmail.com",
            pass: "uxutmrcsuvqqkgzc",
        },
    });

    let optionsMail = {
        from: 'noreply.jobportal1775@gmail.com',
        to: to_mail,
        subject : subject,
        html: mailTemplate
    }
    transposter.sendMail(optionsMail, (err, info)=>{
        if (err) {
            return false
        } else {
            return true
        }
    });

}

// const templatePath = path.join(__dirname, `../../Template/${template}.html`);


const write = (template, data, filename, orientation = 'portrait') => {
    const html = fs.readFileSync(path.join(__dirname, `../../Template/${template}.html`), 'utf8');
    const options = {
        format: "A4",
        orientation: "landscape",
        border: "0mm",
        header: {
            height: "0mm",
        },
        footer: {
            height: "0mm",
            contents: {
            }
        }
    };

    const document = {
        html: html,
        data  : data.data,
        path: `Upload/${filename}.pdf`,
        type: "",
    };
    return new Promise((resolve, reject) => {
        pdf
            .create(document)
            .then((res) => {
                resolve(`${filename}.pdf`)

            })
            .catch((error) => {
                reject(error)
            });
    })
}


module.exports = {
    sendMail,
    write
}