let dataCart = JSON.parse(localStorage.getItem('DataCart')) ? JSON.parse(localStorage.getItem('DataCart')) : [];
function addCart(index){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    if(dataCart.length == 0) {
        dataCart.push(data[index]);
    } else {
        let c = 0;
        for(let i = 0; i < dataCart.length; i++){
            if(dataCart[i].idproduct == data[index].idproduct){
                dataCart[i].quantity++;
                c = 1;
                break;
            }
        }
        if(c == 0){
            dataCart.push(data[index]);
        }
    }
    localStorage.setItem('DataCart', JSON.stringify(dataCart));
    showProductCart();
}

function increaseBtn(i){
    let dataCart = JSON.parse(localStorage.getItem('DataCart'))
    dataCart[i].quantity++;
    localStorage.setItem('DataCart', JSON.stringify(dataCart));
    showProductCart();
}

function reductionBtn(i){
    let dataCart = JSON.parse(localStorage.getItem('DataCart'))
    if(dataCart[i].quantity > 1){
        dataCart[i].quantity--;
    }
    localStorage.setItem('DataCart', JSON.stringify(dataCart));
    showProductCart();
}

function buyProduct(){
    alert(`Bạn đã mua thành công`);
}
showProductCart()