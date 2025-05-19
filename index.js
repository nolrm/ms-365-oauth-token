const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/validate-token', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];

    try {
        const response = await axios.get('https://graph.microsoft.com/v1.0/me', {
            headers: { Authorization: `Bearer ${token}` },
        });

        res.json({ valid: true, user: response.data });
    } catch (error) {
        res.status(401).json({ valid: false, error: error.response?.data || 'Invalid token' });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));