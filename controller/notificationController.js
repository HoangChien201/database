// Import required modules
const admin = require("firebase-admin");
// Replace FIREBASE_ADMIN_SDK_KEY with the path to your Firebase Admin SDK service account key JSON file
const serviceAccount = require("../notification/notifition1-firebase-adminsdk-3oz7y-5146952fae.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
const notificationController = {
    pushNotification: async (req, res) => {

        const {title,content}={...req.body}
        // Initialize Firebase Admin SDK
        

        // Function to send a message
        async function sendFCMMessage(topic, title, body) {
            const message = {
                notification: {
                    title,
                    body,
                },
                topic:topic, // The registration token of the device you want to send the message to
            };

            try {
                // Send the message using Firebase Admin SDK
                const response = await admin.messaging().send(message);
                
                console.log("Successfully sent message:", response);

            } catch (error) {
                console.error("Error sending message:", error);
            }
        }
        res.status(200).json("OK")

        sendFCMMessage(req.params.token, title, content);




    }
}

module.exports=notificationController;