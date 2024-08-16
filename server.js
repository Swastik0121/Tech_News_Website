const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

let db;

connectDB().then(connection => {
    db = connection;
});

// Fetch all news
app.get('/', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM news');
        return res.json({ news: rows });
    } catch (error) {
        console.error('Error fetching news:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Fetch a single news item by ID
app.get('/news/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.execute('SELECT * FROM news WHERE id = ?', [id]);
        if (rows.length > 0) {
            return res.json(rows[0]); // Return the first row (there should be only one match)
        } else {
            return res.status(404).json({ error: 'News not found' });
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

