const express= require('express');

const app = express();
const port = 3000;

const products = [ "Camiseta",
    "Calça Jeans",
    "Tênis",
    "Jaqueta de Couro",
    "Óculos de Sol",
    "Relógio",
    "Bermuda",
    "Boné",
    "Mochila",
    "Cinto"
  ];


app.get('/',(req,res)=>{
    res.send('Server online!')
});

app.get('/products',(req,res)=>{

    res.json(products).send();
});


app.post('/products',(req, res)=>{
    res.status(201).json(products).send();
});

app.patch('/products',(req, res)=>{
    res.status(201).json(products).send();
});
app.delete('/products',(req, res)=>{
    res.status(201).json(products).send();
});


app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})