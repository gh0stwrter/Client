import dotenv from "dotenv";
dotenv.config();

export default {
    api: {
        url: process.env.REACT_APP_API_URL,
        port: process.env.REACT_APP_API_PORT
    },
    mongo: {
        user: process.env.REACT_APP_MONGO_USER,
        pass: process.env.REACT_APP_MONGO_PASSWORD
    },
    client: {
        url: process.env.REACT_APP_SERVER_URL,
        port: process.env.REACT_APP_SERVER_PORT
    },
    stripe: process.env.REACT_APP_STRIPE
}