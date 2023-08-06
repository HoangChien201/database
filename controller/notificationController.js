// Import required modules
const admin = require("firebase-admin");
// Replace FIREBASE_ADMIN_SDK_KEY with the path to your Firebase Admin SDK service account key JSON file
const serviceAccount = require("../notification/notifition1-firebase-adminsdk-3oz7y-5146952fae.json");

const notificationController = {
    pushNotification: async (req, res) => {

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
                console.log("Successfully sent message:", response);
            } catch (error) {
                console.error("Error sending message:", error);
            }
        }

        // Usage example
        const registrationToken = "DEVICE_REGISTRATION_TOKEN"; // Replace with the registration token of the device you want to send the message to
        const messageTitle = "Hello";
        const messageBody = "This is a test message from Node.js.";

        sendFCMMessage(registrationToken, messageTitle, messageBody);

    }
}

module.exports=notificationController;