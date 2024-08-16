require('dotenv').config();
const mysql = require('mysql2/promise'); // Load environment variables

const connectDB = async () => {

    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306 // Default to 3306 if not set
        });
        console.log('DB_HOST:', process.env.DB_HOST);
        console.log('DB_USER:', process.env.DB_USER);
        console.log('DB_PASS:', process.env.DB_PASS);
        console.log('DB_NAME:', process.env.DB_NAME);
        console.log('DB_PORT:', process.env.DB_PORT);
        console.log('MySQL connected');
        return connection;
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;