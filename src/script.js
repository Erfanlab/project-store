console.log('welcome to erfan shop')
let addprocudt = document.getElementById('addprocudt');
const allprodcts = [];
const allPerson =[];
const localproduct = localStorage.getItem("erfan");
const personslocalstorage = localStorage.getItem('preson')
const localcounterUser = localStorage.getItem('counteruser');
const fathercard =document.getElementById('fathercard');
erfan();
persons();
async function erfan() {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      if (!response) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
      localStorage.setItem("erfan", JSON.stringify(json));

    } catch (error) {
      console.error(error.message);
    }
  }

  async function persons() {
    const url = 'https://fakestoreapi.com/users';
    try{
        const response = await fetch(url);
        if (!response){
            throw new Error(`resposne status : ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        localStorage.setItem('preson',JSON.stringify(json));

    }
    catch (error){
        console.log(error.message);
    }

  }
  
if(localproduct){
    document.getElementById('counter-user').textContent = localcounterUser;
    const parseproduct = JSON.parse(localproduct);
    const persondata = JSON.parse(personslocalstorage);
    allprodcts.push(...parseproduct);
    allPerson.push(...persondata);
    document.getElementById('namekala').textContent = allprodcts.reverse()[0].title; 
    document.getElementById('taxkala').textContent = allprodcts.reverse()[0].price;
    document.getElementById('imgshow').src = allprodcts.reverse()[0].image;
    document.getElementById('rating').textContent = allprodcts.reverse()[0].rating.rate;
    document.getElementById('nameperson').textContent = allPerson[0].name.firstname;
    document.getElementById('email').textContent = allPerson[0].email;
    document.getElementById('phonenumber').textContent = allPerson[0].phone;
    parseproduct.forEach(element => {
        addf(element.title,element.price,element.image,element.rating.rate);
    });
       
}
else{
    console.log('clear localstorage')
    
}

    

function addf(a,b,c,d){
const creatcard = document.createElement('div');
    creatcard.innerHTML =`
    <div class=" flex text-xs justify-center items-center gap-5 pt-3 cardi">
        <div class="  border border-gray-600 flex flex-col justify-center items-center rounded-md shadow-md shadow-gray-500  "> 
            <img  width="64px" height="120px" src="${c}" alt="" id="imgshow">
            <div id="rating">
            Rating:${d}</div>
            <p class=" text-xl font-bold namekala" id="namekala">${a}</p>
            <div class=" flex justify-between px-1 w-full">
                <p class=" text-md taxkala" id="taxkala">${b}</p>
                <p class=" font-bold text-md ">:قیمت</p>
            </div>
            <div class=" flex justify-around w-full py-5 px-0 text-white font-bold">
                <button class="deletecard bg-slate-500 border border-gray-900 hover:bg-slate-400 transition-all rounded-md p-1">حذف</button>   
                <button class="bg-slate-500 border border-gray-900 hover:bg-slate-400 transition-all  rounded-md p-1 addbasket">افزودن به سبد</button>
            </div>
        </div>
    </div>
</div>`;
   return fathercard.appendChild(creatcard);
}


function addprocudts(){
    
    const nameproducts = getnameproduct();
    const producttaxs = gettaxproduct();
    const allprodct ={};    
    if (nameproducts &&  producttaxs){
        allprodct.nameitem = nameproducts;
        allprodct.taxitem = producttaxs;
        allprodcts.push(allprodct)
        localStorage.setItem("names", JSON.stringify(allprodcts));
        console.log(allprodct)
        console.log(allprodcts)
        addf(allprodct.nameitem,allprodct.taxitem);

    const imgwoman = getwomanimg();
 
    if (nameproducts &&  producttaxs){
        
        if(imgwoman == false){
            allprodct.nameitem = nameproducts;
            allprodct.taxitem = producttaxs;
            allprodct.srcimg = '/src/images/man.jpg';
            allprodcts.push(allprodct);
            localStorage.setItem("names", JSON.stringify(allprodcts));
            console.log(allprodct);
            console.log(allprodcts);
            addf(allprodct.nameitem,allprodct.taxitem,allprodct.srcimg);
        }else{ 
            allprodct.nameitem = nameproducts;
            allprodct.taxitem = producttaxs;
            allprodct.srcimg = '/src/images/woman.jpg';
            allprodcts.push(allprodct)
            localStorage.setItem("names", JSON.stringify(allprodcts));
            console.log(allprodct);
            console.log(allprodcts);
            addf(allprodct.nameitem,allprodct.taxitem,allprodct.srcimg);
        }
 


}else{
alert("ورودی های خود را بررسی کنید!")
}


return addcounter();


}

// not need change
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
function getwomanimg (){
        let checkimg = document.getElementById('images-input').checked;
        return checkimg;
}
function showAndhidden(){
    addprocudt.classList.toggle('hidden');
}

// delete products

function deleteProduct(event) {
    const button = event.target;
    const card = button.closest('.cardi');
    const taxkalaremove = String(card.querySelector('.namekala').textContent);
    if (card) {
        let kibi = allprodcts.filter((x)=> x.nameitem !== taxkalaremove);
        localStorage.setItem("names", JSON.stringify(kibi));
        card.remove();
        console.log(kibi);
        console.log(allprodcts);
        }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.deletecard').forEach(button => {
        button.addEventListener('click', deleteProduct);
    });
});

//  counter add basket 2025/13/02

function addcounter(){
    let  counterUserNumber = Number(document.getElementById('counter-user').textContent);
    const parseproduct = JSON.parse(localproduct);
        let newcounter = parseproduct.length;
        counterUserNumber = newcounter;
        document.getElementById('counter-user').textContent = counterUserNumber
        localStorage.setItem("counteruser", JSON.stringify(counterUserNumber));
        console.log('count:',counterUserNumber)


    
}

document.addEventListener('DOMContentLoaded', ()=> {
    document.querySelectorAll('.addbasket').forEach(button => {
        button.addEventListener('click',addcounter)
    })

})
