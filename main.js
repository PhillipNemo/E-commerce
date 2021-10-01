let products = document.querySelectorAll('.products');
let cartNumber = document.querySelector('.cart-number');




let items = [
       {
       name : 'Multi-color Smart Watch',
       image : "images/01.png",
       price : 25,
	},
	{
       name : 'White-Color Smart Watch',
       image : "images/02.png",
       price : 54,
},
	{
       name : 'Duo-White-Color Smart Watch',
	image : "images/03.png",
       price : 32,
	},
	{
       name : 'Lime-Pink-Color Smart Watch',
	image : "images/04.png",
       price : 25,
},
	{
       name : 'Golden-faced-Color Smart Watch',
	image : "images/05.png",
       price : 72,
	},
	{
       name : 'Black-Color Smart Watch',
       image : "images/06.png",
        price : 49,
	},
	{
       name : 'Golden-Silver-Color Smart Watch',
	image : "images/07.png",
       price : 70,
	},
	{
       name : 'Silver-Black-Color Smart Watch',
        image : "images/08.png",
        price : 75,
	},
	{
        name : 'Brown-color Smart Watch ',
        image : "images/09.png",
        price : 64
       },
	{
        name : 'Brown-color Smart Watch ',
        image : "images/10.png",
        price : 80
       },
	{
        name : 'Brown-color Smart Watch ',
        image : "images/11.png",
        price : 100
       },
	{
        name : 'Double-Black-color Smart Watch ',
        image : "images/12.png",
        price : 44
       }
	
];
let i = 0;


let detailImage = document.querySelector('#detailImage');
let cartContainer = document.querySelector('#cart-container');


for (let i = 0; i < products.length; i++){
	products[i].addEventListener('click', () => {
        cartNumbers(items[i]);
	})
}

function cartNumbers(items) {
      cartContainer.style.left='0';
       cartContainer.innerHTML = `
              <div class="image">
                  <span onclick="back()" class="back">&#10006</span>
                  <img src="${items.image}"  id="detaiImage" alt="">
              </div>

              <div class="details">
                     
                     <h2 class="product-brand">${items.name}</h2>
                     <span class="product-price">$${items.price}</span>
                     <span class="product-actual-price">$200</span>
                     <p class="product-sub-heading">select size</p>
                     <form>
                            <input type="radio" name="size" value="s" checked hidden id="s-size">
                            <label for="s-size" class="size-radio-btn check">s</label>
                            <input type="radio" name="size" value="m" hidden id="m-size">
                            <label for="m-size" class="size-radio-btn">m</label>
                            <input type="radio" name="size" value="l" hidden id="l-size">
                            <label for="l-size" class="size-radio-btn">l</label>
                            <input type="radio" name="size" value="xl" hidden id="xl-size">
                            <label for="xl-size" class="size-radio-btn">xl</label>
                            <input type="radio" name="size" value="xxl" hidden id="xxl-size">
                            <label for="xxl-size" class="size-radio-btn">xxl</label>
                     </form>
                     <button onclick="addCart()" class="btn cart-btn">add to cart</button>
              </div> 
       
       `
} 


let count = 1;
function addCart(){
     cartNumber.innerHTML = count++;    
     cartNumber.style.color='green'
}

function back(){
     cartContainer.style.left='-100%';

}
