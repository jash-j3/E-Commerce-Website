const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('tiny'));

const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

app.use(`/categories`, categoriesRoutes);
app.use(`/products`, productsRoutes);
app.use(`/users`, usersRoutes);
app.use(`/orders`, ordersRoutes);

mongoose.connect('mongodb+srv://jcube:12345678abc@ecommercedb.ownnjq0.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eshop-database'
})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err);
})

app.listen(3001, ()=>{

    console.log('server is running at 3001');
})