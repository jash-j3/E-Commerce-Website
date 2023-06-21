import React from 'react'
import './P_MainC.css'


function P_MainC() {
    var prev = "one";// id of initial element
function imageChange(id) {
    if (prev==id) {
        return;
    }
  document.getElementById(id).style.width = "56px";
  document.getElementById(id).style.height = "56px";
  document.getElementById(id).style.border = "3px solid black";
  let src = document.getElementById(id).getAttribute("src");
  let alt = document.getElementById(id).getAttribute("alt");

  var image = document.getElementById("display-image");
  image.style.opacity = 0; 
  image.setAttribute("alt", alt);
  setTimeout(function() {
    image.setAttribute("src", src);
    image.style.opacity = 1; 
  }, 400);
  revertChange(prev);
  prev = id;
}
function revertChange(id) {
  document.getElementById(id).style.setProperty("width", "50px");
  document.getElementById(id).style.setProperty("height", "50px");
  document.getElementById(id).style.setProperty("border", "0px");
}
  return (
    <div>
        
        <div class="prev-next">
            <div class="left"><a href="#">Home</a> /
                <span id="product-name">I'm a product</span>
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
                <h1>Product Name</h1>
                <span id="product-id">ID: 1234 </span>
                <h2 id="price-display">$14.99</h2>
                <div class="quantity">
                    <p>Quantity</p>
                    <label for="quantity"></label>
                    <input type="number" id="quantity" name="quantity" min="1" placeholder='1'></input>
                </div>
                <button type="button" id="btn-cart">Add to Cart</button>
                <button type="button" id="btn-buy">Buy Now</button>
                <div class="product-info">
                    <h3>Product info</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget rutrum mi, et ultrices augue.
                        Nunc condimentum risus dui. Donec cursus, lacus sed blandit feugiat, felis erat volutpat justo,
                        sit amet viverra mauris neque ac nibh. Donec eget lectus ante. Nam ac tellus ut velit
                        condimentum sollicitudin. Ut viverra sed neque vitae consequat. Interdum et malesuada fames ac
                        ante ipsum primis in faucibus. Nunc eu turpis id massa feugiat blandit et vitae ligula. Praesent
                        eget commodo ante. Duis ultrices efficitur posuere.
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