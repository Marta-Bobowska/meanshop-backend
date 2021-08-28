const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');

const Product = require('./models/product');

const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');


const api = process.env.API_URL;
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());
app.use(authJwt());
app.use(errorHandler);

app.use(`${api}/categories`, categoriesRoutes);
app.use(`${api}/products`, productsRoutes);
app.use(`${api}/users`, usersRoutes);
app.use(`${api}/orders`, ordersRoutes);

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


  
  

