const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');


app.use(cors());
app.get('/api/wiki/:query', async(req, res) => {
    const query = req.params.query;
    console.log(query);
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${query}`;
    
    
        const response = await axios.get(url);
        console.log(response.data)
        res.json(response.data);
    
});

app.listen(7000,()=>{
    console.log("Running AT 7000");
})