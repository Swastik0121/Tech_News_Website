const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            //host: 'sql12.freesqldatabase.com',
            //user: 'sql12725877',
            //password: 'Rf7EsAVwtF',
            //database: 'sql12725877'
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            connectTimeout: 10000,
        });
        console.log('MySQL connected');
        return connection;
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;