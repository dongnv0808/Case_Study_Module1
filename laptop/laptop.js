function showProduct(){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let showproductlaptop = "";
    for(i = 0; i < data.length; i++){
        if(data[i].type == "laptop"){
            showproductlaptop += 
            `
            <div>
            <img src="./image/img-product/${data[i].image}" width="190px" height="190px" alt="">
            <div class="content-item">
                <a class="detail-product" onclick="detailClick(${i})">${data[i].name}</a>
            </div>
            <strong class="price-item">${data[i].price}đ</strong>
            <div class="btn-item">
                <a onclick="buyProduct()" class="buy-btn">Mua ngay</a>
                <button class="add-cart" onclick="addCart(${i})">Thêm giỏ</button>
            </div>
            </div>
            `
        }
    }
    document.getElementById("product-mobile-list-item").innerHTML = showproductlaptop;
}
