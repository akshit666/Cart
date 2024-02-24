var express = require('express');
var app = express();
var path=require("path")
const port = 5000;
const bodyParser= require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',(req,res)=>{ 
    res.sendFile(path.join(__dirname,"ui.html")) 
})

app.post("/submit",(req,res)=>{
    const selectedItem = req.body.item;
    const quantity = parseInt(req.body.quantity);
    const Price = {
        'Lays': 20,
        'Kurkure': 20,
        'Pizza': 150,
        'Pani-Puri': 60,
        'Aloo-tikki': 30
    }
    
    const Total = Price[selectedItem] * quantity;
    
    res.send(`Total Bill for ${quantity} ${selectedItem} : Rs.${Total}`);
});


app.listen(port,(err)=>{
    if(err)console.log(err);
    else{
        console.log(`server is listening at ${port}`);
    }
})