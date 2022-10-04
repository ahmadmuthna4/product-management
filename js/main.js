var titel=document.getElementById("titel");
var price=document.getElementById("price");
var ads=document.getElementById("ads");
var taxes=document.getElementById("taxes");
var discount=document.getElementById("discount");
var count=document.getElementById("count");
var category=document.getElementById("category");
var submit=document.getElementById("submit");
var search=document.getElementById("search");
var totall=document.getElementById("total");
var addBox=document.getElementById("addBox");
var total=0
var temp;
if (localStorage.p !=null) {
    products=JSON.parse(localStorage.p);
}else{
    var products=[] 
}

// get total 
var getTotal=function(){
     if (price.value !=''){
        total=(+price.value + +ads.value + +taxes.value )- +discount.value;
        totall.innerHTML='total: ' + total;
        totall.classList.add('btn-success');
    }else{
         totall.innerHTML='total: ' + 0;
        totall.classList.remove('btn-success');
    }
}

// cleare input 
var clear=function(){
    titel.value=''
    price.value=''
    ads.value=''
    taxes.value=''
    discount.value=''
    category.value=''
    search.value=''
}

// add product function 
var addProduct=function(){
    if (titel.value && total && ads.value &&  count.value && taxes.value && discount.value && category.value ) {
    let objectProduct={
    titel:titel.value,
    price:total,
    ads:ads.value,
    count:count.value,
    taxes:taxes.value,
    discount:discount.value,
    category:category.value,
    };
    products.push(objectProduct);
    localStorage.setItem("p", JSON.stringify(products));
    getTotal();
    clear();
    location.reload();
    }
}

// show data 
var showData=function(){
    var show=''
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].titel)
        show += `
        <div class="box shadow mr-1 row p-2 overflow-hidden">
                    <div class="col-5 text-center"><img src="images/logo.png" alt=""></div>
                    <div class="col-7">
                        <ul>
                            <li><span>tilte:</span> ${products[i].titel}</li>
                            <li><span>price:</span> ${products[i].price}$</li>
                            <li><span>count:</span> ${products[i].count}</li>
                            <li><span>discount:</span> ${products[i].discount}</li>
                            <li><span>category:</span> ${products[i].category}</li>
                            <li>
                                <button onclick="deletElement(${i})" type="submit" class="btn btn-danger "><i class="fa-solid fa-trash-can"></i></button>
                                    <button onclick="updateData(${i})" id='update' type="button" class="btn btn-primary  " data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                                    <div class="modal fade w-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header mb-3">
                                                    <h1 class="modal-title fs-5 " id="exampleModalLabel">Modal title</h1>
                                                    <button type="button" class="btn-close mb-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                        titel <input type="text" class="form-control mb-3 p-2" id="titel2" placeholder="titel">
                                                        price <input type="text" class="form-control mb-3 p-2" id="price2" placeholder="price">
                                                        taxes <input type="text" class="form-control mb-3 p-2" id="taxes2" placeholder="taxes">
                                                        ads <input type="text" class="form-control mb-3 p-2" id="ads2" placeholder="ads">
                                                        discount <input type="text" class="form-control mb-3 p-2" id="discount2" placeholder="discount">
                                                        count <input type="text" class="form-control mb-3 p-2" id="count2" placeholder="count">
                                                        category <input type="text" class="form-control mb-3 p-2" id="category2" placeholder="category">
                                                </div>
                                                <div class="modal-footer">
                                                    <button onclick="saveUpdateData()"    type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </li>
                        </ul>
                    </div>
                </div>
        `
    }
    addBox.innerHTML=show
}
showData();

// delet element 
var deletElement=function(i){
    products.splice(i,1);
    localStorage.p=JSON.stringify(products);
    showData();
    location.reload();
}

// udate data 
var titel2=document.getElementById("titel2");
var price2=document.getElementById("price2");
var ads2=document.getElementById("ads2");
var taxes2=document.getElementById("taxes2");
var discount2=document.getElementById("discount2");
var count2=document.getElementById("count2");
var category2=document.getElementById("category2");
var updateData=function(i){
    temp=i;
    titel2.value= products[i].titel
    price2.value= products[i].price
    ads2.value= products[i].ads
    taxes2.value= products[i].taxes
    discount2.value= products[i].discount
    count2.value= products[i].count
    category2.value= products[i].category
}

var saveUpdateData=function(){
    console.log(temp);
    products[temp].titel=titel2.value
    products[temp].price=(+price2.value + +ads2.value + +taxes2.value )- +discount2.value;
    products[temp].ads=ads2.value
    products[temp].taxes= taxes2.value
    products[temp].discount=discount2.value
    products[temp].count=count2.value
    products[temp].category=category2.value
    console.log(products)
    localStorage.p=JSON.stringify(products);
    showData();
    location.reload();
}

// search 
var searchData=function(value){
    var show='';
    for (let i = 0; i < products.length; i++) {
        if (products[i].titel.includes(value)) {
            console.log(i)
            show += `
            <div class="box shadow mr-1 row p-2">
                        <div class="col-5 text-center"><img src="images/logo.png" alt=""></div>
                        <div class="col-7">
                            <ul>
                                <li><span>tilte:</span> ${products[i].titel}</li>
                                <li><span>price:</span> ${products[i].price}$</li>
                                <li><span>count:</span> ${products[i].count}</li>
                                <li><span>discount:</span> ${products[i].discount}</li>
                                <li><span>category:</span> ${products[i].category}</li>
                                <li>
                                    <button onclick="deletElement(${i})" type="submit" class="btn btn-danger "><i class="fa-solid fa-trash-can"></i></button>
                                        <button onclick="updateData(${i})" id='update' type="button" class="btn btn-primary  " data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-pen-to-square"></i></button>
                                        
                                        <div class="modal fade w-100" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-header mb-3">
                                                        <h1 class="modal-title fs-5 " id="exampleModalLabel">Modal title</h1>
                                                        <button type="button" class="btn-close mb-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div class="modal-body">
                                                            titel <input type="text" class="form-control mb-3 p-2" id="titel2" placeholder="titel">
                                                            price <input type="text" class="form-control mb-3 p-2" id="price2" placeholder="price">
                                                            taxes <input type="text" class="form-control mb-3 p-2" id="taxes2" placeholder="taxes">
                                                            ads <input type="text" class="form-control mb-3 p-2" id="ads2" placeholder="ads">
                                                            discount <input type="text" class="form-control mb-3 p-2" id="discount2" placeholder="discount">
                                                            count <input type="text" class="form-control mb-3 p-2" id="count2" placeholder="count">
                                                            category <input type="text" class="form-control mb-3 p-2" id="category2" placeholder="category">
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button onclick="saveUpdateData()"    type="submit" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                </li>
                            </ul>
                        </div>
                    </div>
            `
        }
    }
    addBox.innerHTML=show;
}

// Up scroll 

let span = document.querySelector(".up");
window.onscroll=
    ()=>{
        console.log(this.scrollY);
        if (this.scrollY >= 500){
            span.classList.add("show")
        }
        else{
            span.classList.remove("show")
        }
    }
    span.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }