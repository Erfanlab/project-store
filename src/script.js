
console.log('welcome to erfan shop')
let addprocudt = document.getElementById('addprocudt');
const allprodcts = [];
const allprodct ={};
const localproduct = localStorage.getItem("names");
if(localproduct){
    const parseproduct = JSON.parse(localproduct)
    allprodcts.push(...parseproduct)
    document.getElementById('namekala').textContent = allprodcts[3].nameitem;
    document.getElementById('taxkala').textContent = allprodcts[3].taxitem;

}else{
    console.log('clear localstorage')

}
function addprocudts(){
    const nameproducts = getnameproduct();
    const producttaxs = gettaxproduct();
if (nameproducts &&  producttaxs){
    allprodct.nameitem = nameproducts;
    allprodct.taxitem = producttaxs;
    allprodcts.push(allprodct)
    localStorage.setItem("names", JSON.stringify(allprodcts));
    console.log(allprodct)
    console.log(allprodcts)

}else{
alert("ورودی های خود را بررسی کنید!")
}

  
}
console.log(allprodcts[1].nameitem)


function gettaxproduct(){
  let producttax = Number(document.getElementById('tax').value);

if (Number(producttax) == !isNaN ){
     let producttax = false;
    console.log('tax:',producttax);
    console.log('عدد ورودی خود را بررسی کنید');

}else{
    return Number(document.getElementById('tax').value);
    

}

}
function getnameproduct(){
  let nameproduct = document.getElementById('nameproduct').value;
  let checkinput = Number(nameproduct);
  
  if ( isNaN(checkinput) ){
      return document.getElementById('nameproduct').value;
    }else{
        let nameproduct = false;
        console.log('product:',nameproduct);
        console.log('نام محصول خود را بررسی کنید')
    
}

}



function showAndhidden(){
    addprocudt.classList.toggle('hidden')
}




