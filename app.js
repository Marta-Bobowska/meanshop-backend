const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');


const api = process.env.API_URL;

app.use(express.json());
app.use(morgan('tiny'));


app.get(`${api}/products`, (req, res) => {
   const product = {
       id: 1,
       name: 'dresser',
       image: 'url'
   }

    res.send(product);
  });
  

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    res.send(newProduct);
   });

   mongoose.connect( process.env.CONNECTION_STRING ,
   { useNewUrlParser: true,
       useUnifiedTopology: true } 
       )
       .then(() => {
           console.log('DB connected')
       })
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    
    console.log('Listening on 3000');
  });


  
  

