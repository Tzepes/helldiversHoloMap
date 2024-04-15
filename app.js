import express from 'express';
import cors from 'cors';
import ViteExpress from 'vite-express';
import axios from 'axios';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

app.use(cors());

app.get('/api', (req, res) => {
  axios.get('https://api.live.prod.thehelldiversgame.com/api/WarSeason/801/WarInfo', {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    console.error('Error fetching data from API:', error);
    res.status(500).send('Error fetching data from API');
  });
});

ViteExpress.listen(app, 3000, () => console.log("Server is listening..."));