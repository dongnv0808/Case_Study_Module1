function removeCart(index){
    let dataCart = JSON.parse(localStorage.getItem('DataCart'))
    console.log(index)
    dataCart.splice(index,1);
    console.log(dataCart)
    localStorage.setItem('DataCart', JSON.stringify(dataCart));
    showProductCart();
}