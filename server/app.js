const express = require('express');
const app = express();
const cors = require('cors');
const {lineNotify} = require('./modules/linenotify');

app.use(cors());
app.use(express.json());
const port = 3000;

app.post('/linenotify',async(req,res, next)=>{
    try{
        console.log(req.body.values);
        lineNotify(`\n คุณ ${req.body.values.name} \n แผนก ${req.body.values.position} \n มีผู้มาขอพบชื่อ ${req.body.values.visitor}`);
    }catch(err){
        console.log(err);
    }
})

app.listen(port,()=>{console.log("run on server " + port)});

//token="jFvE3C1FDrz8Glh7D72YtZG3UnsE64sPAKvY55jGxmT"