const express = require('express');
const useRouter=express.Router();
const {getData}=require('./controller/route.js')
const app = express();
const port = 8000;
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/api',getData);
app.listen(port, () => console.log(`http://localhost:${port}`));