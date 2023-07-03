const {Product} = require('../models/product');
const express = require('express');
const { Category } = require('../models/category');
const router = express.Router();
const mongoose = require('mongoose');
const Stripe = require("stripe");


const stripe = new Stripe('sk_test_51NNfYPSFJzv4F3NJ3TzQ1iO2Mo1qpGHPNMi0M3NgRm7vrpFgd6yrRF9FUYTV6594pLuRnwBuvjGTeuvIngE6Dozd009c4HbfoR')

router.get(`/`, async (req, res) =>{
    // res.send("Helo");
    // localhost:3000/api/v1/products?categories=2342342,234234
    let filter = {};
    if(req.query.name)
    {
         filter = {name: req.query.name}
    }
    const productList = await Product.find(filter).populate('category');
    if(!productList) {
        res.status(500).json({success: false});
    } 
    res.send(productList);
})
router.post('/' , async (req, res)=>
{   
    let filter = {};
    if(req.body.name)
    {
         filter = {name: req.body.name};
    }
    const productList = await Product.find(filter).populate('category');

    if(!productList) {
        res.status(500).json({success: false})
    } 

    res.send(productList);
});

router.post('/create-checkout-session' , async (req, res)=>
{   
    
    const items = req.body;
    console.log(items);
    try {
        const params = {
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          billing_address_collection: "auto",
        //   shipping_options: [{ shipping_rate: "shr_1N0qDnSAq8kJSdzMvlVkJdua" }],
    
          line_items: items.map((item) => {
            return {
              price_data: {
                currency: "inr",
                product_data: {
                  name: item.name,
                  // images : [item.image]
                },
                unit_amount: item.price*100,
              },
              adjustable_quantity: {
                enabled: true,
                minimum: 0,
                maximum: item.countInStock,
              },
              quantity: item.productCount,
            };
          }),
    
          success_url: `http://localhost:3000/`,
          cancel_url: `http://localhost:3000/`,
        };
    
        const session = await stripe.checkout.sessions.create(params);
        console.log(session)
        res.status(200).json(session.id);
      } catch (err) {
        console.log(err);
      }
});

router.post("/find", async (req, res) => {
    const { name } = req.body;
    console.log(name);
    console.log("naameeeeee");
    // const posts = await PostSchema.find({
    //     $text: { $search: n },
    //   });
    var posts;
    if(name!=''&&name!=null){
    posts=await Product.aggregate([
        {
            $search: {
              "index": "default",
            //   "autocomplete": {
            //       "path": "name",
            //       "query": name
            //     },
                // "autocomplete": {
                //   "path": "description",
                //   "query": name
                // },
                'compound': {
                    'should': [
                        {
                            'autocomplete': {
                                'query': name, 
                                'path': 'name'
                            }
                        }, 
                        {
                            'autocomplete': {
                                'query': name, 
                                'path': 'description'
                            }
                        }
                    ], 
                    'minimumShouldMatch': 1
                }
            }
        },
      ]);
      console.log(posts);
      if (posts.length > 0) {
        res.send(posts);
      }
      else{
        res.send({alert:false})
      }}
    // Product.findOne({name:name}, (err, result) => {
    //   console.log("result"+result);
    //   console.log(err);
    //   if (result) {
    //     res.send(result);
    //   } else {
    //     res.send({ message: "Cant find it"});
    //   }
    // });
  });

  router.post(`/id/:id`,async(req,res)=>{
    console.log(req.body.id);
    console.log("id yhi hai");
    const product = await Product.findById(req.body.id).populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
  })
router.get(`/:id`, async (req, res) =>{
    const product = await Product.findById(req.body.id).populate('category');

    if(!product) {
        res.status(500).json({success: false})
    } 
    res.send(product);
})

router.post(`/new`, async (req, res) =>{
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')
    console.log(req.body);
    let product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
        Five: req.body.Five,
        Four: req.body.Four,
        Three: req.body.Three,
        Two: req.body.Two,
        One: req.body.One,
    })

    product = await product.save();

    if(!product) 
    return res.status(500).send('The product cannot be created')

    res.send(product);
})

router.put('/:id',async (req, res)=> {
    if(!mongoose.isValidObjectId(req.params.id)) {
       return res.status(400).send('Invalid Product Id')
    }
    const category = await Category.findById(req.body.category);
    if(!category) return res.status(400).send('Invalid Category')

    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            richDescription: req.body.richDescription,
            image: req.body.image,
            brand: req.body.brand,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            rating: req.body.rating,
            numReviews: req.body.numReviews,
            isFeatured: req.body.isFeatured,
        },
        { new: true}
    )

    if(!product)
    return res.status(500).send('the product cannot be updated!')

    res.send(product);
})

router.delete('/:id', (req, res)=>{
    Product.findByIdAndRemove(req.params.id).then(product =>{
        if(product) {
            return res.status(200).json({success: true, message: 'the product is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "product not found!"})
        }
    }).catch(err=>{
       return res.status(500).json({success: false, error: err}) 
    })
})

router.get(`/get/count`, async (req, res) =>{
    const productCount = await Product.countDocuments((count) => count)

    if(!productCount) {
        res.status(500).json({success: false})
    } 
    res.send({
        productCount: productCount
    });
})

router.get(`/get/featured/:count`, async (req, res) =>{
    const count = req.params.count ? req.params.count : 0
    const products = await Product.find({isFeatured: true}).limit(+count);

    if(!products) {
        res.status(500).json({success: false})
    } 
    res.send(products);
})

module.exports =router;