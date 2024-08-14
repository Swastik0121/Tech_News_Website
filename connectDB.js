const mysql = require('mysql2/promise');

const connectDB = async () => {
    try {
        const connection = await mysql.createConnection({
            host: 'sql12.freesqldatabase.com',
            user: 'sql12725877',
            password: 'Rf7EsAVwtF',
            database: 'sql12725877'
        });
        console.log('MySQL connected');
        return connection;
    } catch (error) {
        console.error('MySQL connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;