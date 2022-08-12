let user = JSON.parse(sessionStorage.user || null);

// create small product cards
window.onload = () =>{
    if(user){
        if(compareToken(user.authToken, user.email)){
            // if(!user.seller){
            //     becomeSellerElement.classList.remove('hide');
            // } else{
                // loader.style.display = 'block';
                productListingElement.classList.remove('hide');
                setProducts();
            
        } else{
            location.replace('/login');
        }
    } else{
        location.replace('/login');
    }
}



const createSmallCards = (data) => {
    return `
    <div class="sm-product">
                    <img src="${data.image}" class="sm-product-img" alt="">
                    <div class="sm-text">
                        <p class="sm-product-name">${data.name}</p>
                        <p class="sm-des">${data.shortDes}</p>
                    </div>
                    <div class="item-counter">
                        <button class="counter-btn decrement">-</button>
                        <p class="item-count">${data.item}</p>
                        <button class="counter-btn increment">+</button>
                    </div>
                    <p class="sm-price" data-price="${data.sellPrice}">₹${data.sellPrice * data.item}</p>
                    <button class="sm-delete-btn"><img src="img/close.png" alt=""></button>
                </div>
    `;
}

const setProducts = (name) => {
    const element = document.querySelector(`.${name}`);
    let data = JSON.parse(localStorage.getItem(name));
    if(data == null){
        element.innerHTML = `<img src="img/empty-cart.png" class="empty-img" alt="">`;
    } else {
        for(let i=0; i<data.length; i++){
            element.innerHTML += createSmallCards(data[i])
        }
    }

    setupEvents(name);
}

const setupEvents = (name) => {
    // setup counter event
    const counterMinus = document.querySelectorAll(`.${name} .decrement`);
    const counterPlus = document.querySelectorAll(`.${name} .increment`);
    const counts = document.querySelectorAll(`.${name} .item-count`);
    const price = document.querySelectorAll(`.${name} .sm-price`);
    const deleteBtn = document.querySelectorAll(`.${name} .sm-delete-btn`);

    let product = JSON.parse(localStorage.getItem(name));

    counts.forEach((item, i) => {
        let cost = Number(price[i].getAttribute('data-price'));

        counterMinus[i].addEventListener('click', () => {
            if(item.innerHTML > 1){
                item.innerHTML--;
                price[i].innerHTML = `₹${item.innerHTML * cost}`
            }
        })
        counterPlus[i].addEventListener('click', () => {
            if(item.innerHTML < 9){
                item.innerHTML++;
                price[i].innerHTML = `₹${item.innerHTML * cost}`
            }
        })

    })

    deleteBtn.forEach((item, i) => {
        item.addEventListener('click', () => {
            product = product.filter((data, index) => index != i);
            localStorage.setItem(name, JSON.stringify(product));
            location.reload();
        })
    })
}

setProducts('wishlist');