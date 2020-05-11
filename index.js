const app = require('express')();

app.get('/',(req,res)=>{
    res.end("Hello World");
});

app.listen(3000,()=>{console.log("server up on 3000")});