require('dotenv').config()
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;


const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({message:"Working!!!))"})
});

app.listen(PORT,()=>console.log(`Server start on ${PORT} port`));





