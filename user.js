const nodemailer=require('nodemailer')
async function sendEmail(req, res){
    const {from,to,subject,text}=req.body;
    let mailTransporter = nodemailer.createTransport({
        service: 'Outlook365',
        auth: {
            user: 'no-reply@qservicesit.com',
            pass: 'N0R3ply@2022'
        }
    });
     
    let test =await mailTransporter.sendMail({
        from:req.body.from,
        to:req.body.to,
        subject:req.body.subject,
        text:req.body.text
    });
    return res.status(201).send({
        msg:'ok',
        data:test
    })
}
module.exports = {
    sendEmail
}