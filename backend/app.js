const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');


app.use(cors());
app.get('/api/wiki/:query', async(req, res) => {
    
    const query = req.params.query;
    console.log(query);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`;
    
    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data from Wikipedia' });
    }
});

app.listen(7000,()=>{
    console.log("Running AT 7000");
})