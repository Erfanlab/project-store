
console.log('welcome to erfan shop')
let addprocudt = document.getElementById('addprocudt');
const allprodcts = [];
const allprodct ={};
const localproduct = localStorage.getItem("names");
const fathercard =document.getElementById('fathercard');



if(localproduct){
    const parseproduct = JSON.parse(localproduct)
    allprodcts.push(...parseproduct)
    document.getElementById('namekala').textContent = allprodcts.reverse()[0].nameitem; 
    document.getElementById('taxkala').textContent = allprodcts.reverse()[0].taxitem;
    console.log(parseproduct)
    parseproduct.forEach(element => {
        addf(element.nameitem,element.taxitem);
    });


    
    
}else{
    console.log('clear localstorage')
    
}



function addf(a,b){
const creatcard = document.createElement('div');
    creatcard.innerHTML =`
    <div class=" flex justify-center items-center gap-5 pt-3 ">
        <div class="  border border-gray-600 flex flex-col justify-center items-center rounded-md shadow-md shadow-gray-500  "> 
            <img src="/src/images/man.jpg" alt="">
            <p class=" text-xl font-bold" id="namekala">"${a}"</p>
            <div class=" flex justify-between px-1 w-full">
                <p class=" text-md " id="taxkala">${b}</p>
                <p class=" font-bold text-md ">:قیمت</p>
            </div>
            <div class=" flex justify-around w-full py-5 px-0 text-white font-bold">
                <button class=" bg-slate-500 border border-gray-900 hover:bg-slate-400 transition-all rounded-md p-1">جزییات</button>   
                <button class="bg-slate-500 border border-gray-900 hover:bg-slate-400 transition-all  rounded-md p-1">افزودن به سبد</button>
            </div>
        </div>
    </div>
</div>`;
   return fathercard.appendChild(creatcard);
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
        addf(allprodct.nameitem,allprodct.taxitem);



}else{
alert("ورودی های خود را بررسی کنید!")
}





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
s
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
// 









