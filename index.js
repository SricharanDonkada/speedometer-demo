const app = require('express')();
const cors = require('cors');

app.use(cors());
app.get('/',(req,res)=>{
    res.end("working");
});

app.get('/get-value',(req,res)=>{
    let val = Math.floor(Math.random() * 90 + 10);
    res.json({value:val});
    res.end()
});

app.listen(process.env.PORT || 3000,()=>{console.log("server up on 3000")});