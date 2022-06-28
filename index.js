const express = require('express');
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT || 8080;
const app = express();

const fs = require('fs');
const path = require('path');

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT,()=>{
    console.log(`Serer start on ${PORT} port`);
});

app.get('/', (req,res) => {
   fs.readFile('./views/homePage.html',(err, data) =>{
        res.write(data);
        res.end();
   });
});