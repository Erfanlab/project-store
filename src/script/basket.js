const localproductBasket = localStorage.getItem("names");
const parseproductBasket = JSON.parse(localproductBasket);
const cardBasketTitle = document.getElementsByName('card-basket-title');
const cardBasketImg = document.getElementsByName('card-basket-img');



function erfan() {
    parseproductBasket.forEach(element => {
        document.getElementById('card-basket-title').innerHTML = element.nameitem
        console.log(element)
    });    
 
 }   
 

