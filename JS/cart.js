// Traigo la info del LS
 
let productsOnCart = localStorage.getItem("productsOnCart");
productsOnCart = JSON.parse(productsOnCart)

console.log(productsOnCart)


const ContainerCartEmpty = document.querySelector("#cart-empty");
const ContainerCartProducts = document.querySelector("#cart-products");
const ContainerCartActions = document.querySelector("#cart-actions");
const ContainerCartBuy = document.querySelector("#cart-buy");
let btnsDelete = document.querySelectorAll(".cart-delete");
const btnTrash = document.querySelector("#trash");
const btnBuy = document.querySelector("#buy");



// Funcion para cargar products
function loadProductsCart() {
    if (productsOnCart && productsOnCart.length > 0){

 
        ContainerCartEmpty.classList.add("disabled");
        ContainerCartProducts.classList.remove("disabled");
        ContainerCartActions.classList.remove("disabled");
        ContainerCartBuy.classList.add("disabled");
    
            ContainerCartProducts.innerHTML ='' // que se quede vacío el contenedor
    
            productsOnCart.forEach(product => {
                      
                const div = document.createElement("div");
                div.classList.add("cart-product");
                div.innerHTML = `
                <img class="cart-product-img"  src="${product.imagen}" alt="${product.titulo}">
                    <div class="cart-product-title">
                        <small>Especie</small>
                        <h3>${product.titulo}</h3>
                    </div>
                    <div class="cart-product-quantity">
                        <small>Cantidad</small>
                         <p>${product.cantidad}</p>
                    </div>
                    <div class="cart-price">
                        <small>Precio</small>
                        <p>${product.precio}</p>
                        </div>
                    <div class="cart-subt">
                        <small>Subtotal</small>
                        <p>$${product.precio * product.cantidad}</p>
                    </div>
                        <button class="cart-delete" id="${product.id}">🧹</button>
                                
                `;
    
                ContainerCartProducts.append(div)
            })
         
    
    } else{
    
        ContainerCartEmpty.classList.remove("disabled");
        ContainerCartProducts.classList.add("disabled");
        ContainerCartActions.classList.add("disabled");
        ContainerCartBuy.classList.add("disabled");
    
    }
    updateBtnsDelete();
    updateTotal();

}

loadProductsCart();



function updateBtnsDelete() {
    btnsDelete = document.querySelectorAll(".cart-delete");

    btnsDelete.forEach(btn => {
        btn.addEventListener("click", trashOfCart);
    });
}


//Eliminar productos del carrito
function trashOfCart (e) {
    const idBtn = e.currentTarget.id;
    const index = productsOnCart.findIndex(product => product.id === idBtn);
    
    productsOnCart.splice(index, 1);

    loadProductsCart();
    
    localStorage.setItem("productsOnCart", JSON.stringify(productsOnCart));

}


//Funcion para Vaciar Carrito
    btnTrash.addEventListener('click', emptycart)
function emptycart (){

    productsOnCart.length = 0;
    localStorage.setItem("productsOnCart", JSON.stringify(productsOnCart));
    loadProductsCart();
}



//Total del carrito

function updateTotal(){
   const totalCalc = productsOnCart.reduce((acc, product) => acc + (product.precio * product.cantidad), 0);
   total.innerText = `$${totalCalc}`
}
    

//Funcion para Vaciar Carrito
btnBuy.addEventListener('click', buycart)
function buycart (){

    productsOnCart.length = 0;
    localStorage.setItem("productsOnCart", JSON.stringify(productsOnCart));
       
    ContainerCartEmpty.classList.add("disabled");
    ContainerCartProducts.classList.add("disabled");
    ContainerCartActions.classList.add("disabled");
    ContainerCartBuy.classList.remove("disabled");
}


























