let loader = document.querySelector('.loader');
let user = JSON.parse(sessionStorage.user || null);

const productListingElement = document.querySelector('.product-listing');

window.onload = () =>{
    if(user){
        if(compareToken(user.authToken, user.email)){
            // if(!user.seller){
            //     becomeSellerElement.classList.remove('hide');
            // } else{
                // loader.style.display = 'block';
                productListingElement.classList.remove('hide');
                setupProducts();
            
        } else{
            location.replace('/login');
        }
    } else{
        location.replace('/login');
    }
}

const setupProducts = () =>{
    fetch('/get-products', {
        method: 'post',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify({email: user.email})
    })
    .then(res => res.json())
    .then(data => {
        // loader.style.display = null;
        productListingElement.classList.remove('hide');
        if(data == 'no products'){
            let emptySvg = document.querySelector('.no-product-image');
            emptySvg.classList.remove('hide');
        } else{
            data.forEach(product => createProduct(product));
        }
    });
}