const express = require('express');
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT || 8080;
const app = express();

app.use('/api', userRouter);
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Serer start on ${PORT} port`)
});