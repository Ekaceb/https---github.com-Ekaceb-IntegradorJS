// 1- definir las variables.

const nav = document.querySelector("#nav");
const openNav = document.querySelector("#open");
const closeNav = document.querySelector("#close");


const panels = document.querySelectorAll('.panel');
const containerProducts = document.querySelector("#container-products");
const btnCategories = document.querySelectorAll(".btn-ctg");
const titlePrimary = document.querySelector("#title-primary");
let btnsAgree = document.querySelectorAll(".agree-product");
const number = document.querySelector("#number");


//Menu Nav-Ham
openNav.addEventListener('click', () =>{
    nav.classList.add("visible");  
   
});

closeNav.addEventListener('click', () =>{
    nav.classList.remove("visible");   

});

openNav.addEventListener('click', () =>{
    nav.classList.toggle("show");
});



//JS Gallery
// console.log(panels[0]);
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeMotionClases();
    panel.classList.add('motion');
    // panel.classList.remove('motion')

  });
});

const removeMotionClases = ()=>{ 
  panels.forEach((panel) => {
    panel.classList.remove('motion')
  })
}


/*JS CARRITO */

//Renderizado de todos los productos del carrito
function renderProducts (chosenProducts) {
    containerProducts.innerHTML= "";
    
    chosenProducts.forEach(product => {
    
    const div = document.createElement("div");
    div.classList.add("product");
    div.innerHTML = `
        <img class="img-product" src="${product.imagen}" alt="${product.titulo}">
        <div class="details-product">
            <h3 class="title-product">${product.titulo}</h3>
            <p class="price-product">$${product.precio}</p>
            <button class="agree-product" id="${product.id}">Agregar</button>
        </div>
    `;

    containerProducts.append(div);
       
});
     updateBtnsAgree(); 
    //  console.log(btnsAgree)
}
renderProducts(products);



//Aplico filtro a productos del carrito
btnCategories.forEach(btn => {
    btn.addEventListener("click", (e) => {

        btnCategories.forEach(btn => btn.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "alls") {
            const productCategorie = products.find(product => product.categoria.id === e.currentTarget.id);
            titlePrimary.innerText = productCategorie.categoria.nombre;
            const productsBtn = products.filter(product => product.categoria.id === e.currentTarget.id);
            renderProducts(productsBtn);
        } else {
            titlePrimary.innerText = "Todas SucuLindas";
            renderProducts(products);
        } 

    })
 
});


// console.log(btnsAgree)

function updateBtnsAgree()  {
    btnsAgree = document.querySelectorAll(".agree-product");

    btnsAgree.forEach(btn => {
        btn.addEventListener("click", addCart);
    });
}



let productsOnCart;

let productsOnCartLS = localStorage.getItem('productsOnCart')
if(productsOnCartLS){
    productsOnCart = JSON.parse(productsOnCartLS);
    updateNumber();
}else{
    productsOnCart = []; 
}



// Funcion para Botones agregar al carrito
function addCart(e) {

const idBtn = e.currentTarget.id;
const productAgree = products.find(product => product.id === idBtn);


if(productsOnCart.some(product => product.id === idBtn)) {
    const index = productsOnCart.findIndex(product => product.id === idBtn);
   productsOnCart[index].cantidad++;
} else {
    productAgree.cantidad = 1; //agrego una nueva propiedad al objeto
    productsOnCart.push(productAgree);
}

    updateNumber();
    localStorage.setItem('productsOnCart', JSON.stringify(productsOnCart));
}

function updateNumber() {
    let newNumber = productsOnCart.reduce((acc, product) => acc + product.cantidad, 0);
    number.innerText = newNumber;
}


