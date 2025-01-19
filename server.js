

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Crypto Tracker API');
});

// Endpoint to fetch crypto prices
app.get('/api/crypto/:coinId', async (req, res) => {
    const { coinId } = req.params;
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching crypto data', error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
