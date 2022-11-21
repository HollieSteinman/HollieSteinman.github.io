import * as functions from 'firebase-functions';
import { admin, db } from './config/firebase';
const nodemailer = require('nodemailer');

exports.sendContact = functions.runWith({enforceAppCheck: true}).https.onCall(async (data, context) => {
        if (context.app == undefined) {
            throw new functions.https.HttpsError(
                'failed-precondition',
                'The function must be called from an App Check verified app.')
        }

        let transporter = nodemailer.createTransport({
            host:  "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: functions.config().email.from,
                pass: functions.config().email.password,
            }
        });

        var returnMsg = {
            success: false,
            message: ''
        }
        try {
            await transporter.sendMail({
                from: functions.config().email.from,
                to: functions.config().email.to,
                subject: data.subject,
                text: `From: ${data.name} (${data.email}), ${data.subect}: ${data.message}`,
                html: `<h2>From: ${data.name} (${data.email})</h2></br>
                <h3>${data.subject}</h3></br></br>
                <p>${data.message}</p></br></br>
                <p>Sent from GH-Pages / Firebase Cloud Functions</p>`
            })

            returnMsg.success = true;
        }
        catch (error: any) {
            returnMsg.success = false;
            returnMsg.message = error
        }

        try {
            db.collection('contact').add({
                email: data.email,
                message: data.message,
                name: data.name,
                subject: data.subject,
                success: returnMsg.success,
                errorMsg: returnMsg.message,
                sent: admin.firestore.Timestamp.now()
            })
        } catch (error: any) {
            console.error(error.message)
        }

        return returnMsg;
    })