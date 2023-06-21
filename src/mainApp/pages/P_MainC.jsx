import React from 'react'
import './P_MainC.css'
import { Product } from '../../Backend(DB)/models/product'
import {useParams} from 'react-router-dom';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

async function dataReturn(params)
{
    const fetchData = await fetch(`http://localhost:3001/products/find/`,{
          method : "POST",
          headers : {
            "content-type" : "application/json"
          },
          body : JSON.stringify({name:params.name})
        })
        
        const dataRes = await fetchData.json()
        console.log(dataRes);
        return dataRes;
}
function P_MainC() {
    const params = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dataReturn(params);
      setData(response);
    };

    fetchData();
  }, [params]);

  console.log(params);
  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div>
        
        <div class="prev-next">
            <div class="left"><Link to='/'>Home</Link> /
                <span id="product-name">{data.name}</span>
            </div>

            <div class="right">
                <a href="#"><i class="fa-solid fa-chevron-left"></i>
                    Prev</a>
                |
                <a href="#">Next
                    <i class="fa-solid fa-chevron-left fa-rotate-180"></i>
                </a>
            </div>
        </div>
        <div class="main-content">
            <div class="product-image">
                <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png" id="display-image" alt="DSLR image"></img>

                <div class="more-images" alt="some more images of product">
                    <img id="one" src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e563db5537881bbfcf_instax%20mini%209-min.png" onclick="imageChange('one')"></img>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis molestie nulla. Sed viverra
                    urna eu diam porta, vitae condimentum ante vulputate. Aliquam aliquam eget sem nec lacinia.
                    Pellentesque tincidunt lorem eget arcu varius volutpat. Quisque lacinia varius vestibulum.
                    Pellentesque bibendum metus scelerisque, porttitor urna et, blandit velit. Phasellus vulputate urna
                    nibh, nec auctor massa mattis quis. Phasellus vel auctor nibh.</p>
            </div>
            <div class="product-buy">
                <h1>{data.name}</h1>
                <span id="product-id">ID: {data.id} </span>
                <h2 id="price-display">${data.price}</h2>
                <div class="quantity">
                    <p>Quantity</p>
                    <label for="quantity"></label>
                    <input type="number" id="quantity" name="quantity" min="1" placeholder='1'></input>
                </div>
                <button type="button" id="btn-cart">Add to Cart</button>
                <button type="button" id="btn-buy">Buy Now</button>
                <div class="product-info">
                    <h3>Product info</h3>
                    <p>Here , description comes.<br></br>
                        {data.description}<br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis illum commodi velit optio unde et! Quibusdam eos dolor natus facilis quas aut consectetur architecto! Facere aperiam dolorum architecto repudiandae ab.
                    </p>
                </div>
                <hr></hr>
                <div class="product-info">
                    <h3>Return and Refund Policy</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget rutrum mi, et ultrices augue.
                        Nunc condimentum risus dui. Donec cursus, lacus sed blandit feugiat, felis erat volutpat justo,
                        sit amet viverra mauris neque ac nibh. Donec eget lectus ante. Nam ac tellus ut velit
                        condimentum sollicitudin. Ut viverra sed neque vitae consequat. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc eu turpis id massa feugiat blandit et vitae ligula. Praesent
                        eget commodo ante. Duis ultrices efficitur posuere.
                    </p>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default P_MainC