let cartBtn = document.querySelector('.shop-cart');  
function showCartShop(){
    modal.classList.add('open')
}
cartBtn.addEventListener('click', showCartShop);

let modal = document.querySelector('.js-modal');
let closeBtn = document.querySelector('.js-close-btn')
function closeCartShop(){
    modal.classList.remove('open');
}
closeBtn.addEventListener('click', closeCartShop);

function detailClick(i){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    modalDetail.classList.add('open');
    let showDetailProduct = "";
    showDetailProduct +=
    `
    <div style="padding: 24px;">
        <img src="./image/img-product/${data[i].image}" width="400px" height="400px">
    </div>
    <table style="padding: 24px;">
        <tr>
            <td>
                Màn hình:
            </td>
            <td>
                ${data[i].display}
            </td>
        </tr>
        <tr>
            <td>Chip:</td>
            <td>${data[i].chip}</td>
        </tr>
        <tr>
            <td>Ram:</td>
            <td>${data[i].ram}</td>
        </tr>
        <tr>
            <td>Hệ điều hành:</td>
            <td>${data[i].hdh}</td>
        </tr>
        <tr>
            <td>Pin:</td>
            <td>${data[i].pin}</td>
        </tr>
    </table>
    `
    document.getElementById('product-mobile-item-detail').innerHTML = showDetailProduct;
}

let modalDetail = document.querySelector('.js-modal-detail')
let closeDetail = document.querySelector('.btn-close-detail')
function closeDetailProduct(){
    modalDetail.classList.remove('open')
}
closeDetail.addEventListener('click', closeDetailProduct);

showProduct();


