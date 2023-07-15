
const show = document.querySelector('.items');
let dataRes = null;
const handleChange = async (event)=>{
   const fetchData = await fetch(`http://localhost:3001/products/find/`, {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify({ name: event.target.value }),
     });
     dataRes = await fetchData.json();
     console.log(dataRes);

     if(event.target.value == "") show.innerHTML = "";
     else if(dataRes.alert == false )
     {
         show.innerHTML = "<div class = 'item'> No products found</div>";
     }
     else
     {
         let text = "";
        show.innerHTML= "";
         for(let i = 0 ; i< dataRes.length; i++)
         {
          
          dataRes[i].productCount = 1;

            show.innerHTML+=`<div class = "item">
            <div class="srchpro">
               <div class="srchproimg">
                 <img
                   src= ${dataRes[i].image}
                   alt="product-img"
                   class="srchimg"
                 />
               </div>
               <div class = "srchdet">
                 <h3>${dataRes[i].name}</h3>
                 <div class = "pointer" > 
                 <div class = "hello">
                 <i class="fa-solid fa-minus ${"m" + i}"></i>
                 <span class = ${'count' + i}>${dataRes[i].productCount}</span>
                 <i class="fa-solid fa-plus ${"p" + i}"></i>
                 </div>
                 <button type="button" id="btn-cart" > Add to Cart </button>
                 
                 </div>
                 
               </div>
             </div>
             
         </div>`;
       
         
         }
        }
         ;
     }
   

document.querySelector('.input-box').addEventListener('keyup', handleChange);

// Event Delegation
show.addEventListener('click', (event) => {
  const targetClass = event.target.classList;
  if (targetClass.contains('fa-minus')) {
    const index = parseInt(targetClass[2].substring(1));
    if (dataRes[index].productCount > 1) {
      dataRes[index].productCount--;
      document.querySelector('.count'+ index).innerHTML = dataRes[index].productCount;
      console.log(dataRes[index]);
    }
  } else if (targetClass.contains('fa-plus')) {
    const index = parseInt(targetClass[2].substring(1));
    if (dataRes[index].productCount < dataRes[index].countInStock) {
      dataRes[index].productCount++;
      document.querySelector('.count'+ index).innerHTML = dataRes[index].productCount;
      console.log(dataRes[index]);
    }
  }
});
const url1 = document.querySelector('.icon');
const url2 = document.querySelector('.fa-cart-shopping');

url1.addEventListener('click' , clicked);
url2.addEventListener('click' , clicked);

function clicked(event)
{
  console.log(event.target);
  if(event.target.classList.contains('icon'))
  chrome.runtime.sendMessage({
   clicked: "Home",
  })
  else
  {
    chrome.runtime.sendMessage({
      clicked: "Cart",
     })
  }
}

