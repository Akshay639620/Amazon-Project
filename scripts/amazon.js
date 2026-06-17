import { cart, addToCart } from '../data/cart.js';
import {products} from '../data/products.js';
import { formatCurrency } from './utils/money.js';
/* 
Here we have use module for preventing he naming conflict
as if the variable already present in amazon.js and cart.js

IF THE SAME VARIABLE IS PRESENT IN 2 FILES IT CREATES NAMING CONFILCT BETWEEN THEM,
THATS WHY WE USE MODULE.

## CRRATING A MODULE
1-> CREATE A FILE.
2-> DONT LOAD FILE  IN <SCRIPT> TAG. 

## GET A VARIABLE OUT OF A FILE IN MODULE HAS THREE STEPS :
1-ADD MODULE IN SCRIPT TAG OF FILE NAME  WHERE TO U HAVE TO USE THAT VARIABLE .
2-EXPORT THAT VAIRABLE means giing permission to be get used.
3-now after exporting the variable , u can import th variable in thw file u have to use it.

by import cammand u can also change the name of variable i.e,
"import {cart as mycart} -> now cart name change to mycart".
 */

let productHTML='';
products.forEach((product) =>{
          productHTML +=`
          <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src=" images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${formatCurrency(product.priceCents)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-addtocart"
          data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>
  `;  
});

document.querySelector('.js-product-grid')
.innerHTML=productHTML;



function updateCartQuantity(){
  let totalCartQuantity = 0;
  cart.forEach((cartItem) => {
    totalCartQuantity += cartItem.quantity;
  });

  document.querySelector('.js-cart-quantity')
    .innerHTML = totalCartQuantity;

  console.log(totalCartQuantity);
  console.log(cart);
}
document.querySelectorAll('.js-addtocart').forEach((button) =>{
  button.addEventListener('click',()=>{
    const productId=button.dataset.productId;

    addToCart(productId);
    updateCartQuantity();



  });
});