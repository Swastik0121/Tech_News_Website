require('dotenv').config();
const mysql = require('mysql2/promise'); // Load environment variables

const connectDB = async () => {

    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
        });
        console.log('MySQL connected');
        return connection;
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;