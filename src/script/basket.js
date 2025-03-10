const localproductBasket = localStorage.getItem("names");
const parseproductBasket = JSON.parse(localproductBasket);
const cardBasketTitle = document.getElementsByName('card-basket-title');
const cardBasketImg = document.getElementsByName('card-basket-img');



function dd() {
    parseproductBasket.forEach(element => {
        document.getElementById('card-basket-title').innerHTML = element.nameitem
        console.log(element)
    });    
 
 }   
 document.getElementById('counter-user').textContent = Number(parseproductBasket.length)


