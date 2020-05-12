const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.static("./public/speedometer"));

app.get('/get-value',(req,res)=>{
    let val = Math.floor(Math.random() * 90 + 10);
    res.json({value:val});
    res.end()
});

app.listen(process.env.PORT || 3000,()=>{console.log("server up on 3000")});