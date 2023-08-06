// Import required modules
const admin = require("firebase-admin");
// Replace FIREBASE_ADMIN_SDK_KEY with the path to your Firebase Admin SDK service account key JSON file
const serviceAccount = require("../notification/notifition1-firebase-adminsdk-3oz7y-5146952fae.json");
const e = require("express");

const notificationController = {
    pushNotification: async (req, res) => {

        const {title,content}={...req.body}
        // Initialize Firebase Admin SDK
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
        });

        // Function to send a message
        async function sendFCMMessage(token, title, body) {
            const message = {
                notification: {
                    title,
                    body,
                },
                token, // The registration token of the device you want to send the message to
            };

            try {
                // Send the message using Firebase Admin SDK
                const response = await admin.messaging().send(message);
                res.status(200).json("OK")
            } catch (error) {
                res.status(500).json(error)
            }
        }

        sendFCMMessage(req.params.token, title, content);
    }
}

module.exports=notificationController;