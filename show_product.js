function showProduct(){
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let showproductmobile = "";
    let showproducttablet = "";
    let showproductlaptop = "";
    let countMobile = 0;
    let countTablet = 0;
    let countLaptop = 0;
    for(let i = 0; i < data.length; i++){
        if(data[i].type == "mobile"){
            showproductmobile += 
            `
            <div style="float: left; padding-top: 16px; width:20%">
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
            countMobile++;
        }
        if(countMobile == 5){
            break
        }
    }
    for(let j = 0; j < data.length; j++){
        if(data[j].type == "tablet"){
            showproducttablet +=
            `
            <div style =" padding-top: 16px;
            width: 20%;
            float: left;">
            <img src="./image/img-product/${data[j].image}" width="190px" height="190px" alt="">
            <div class="content-item">
                <a class="detail-product" onclick="detailClick(${j})">${data[j].name}</a>
            </div>
            <strong class="price-item">${data[j].price}đ</strong>
            <div class="btn-item">
                <a onclick="buyProduct()" class="buy-btn">Mua ngay</a>
                <button class="add-cart" onclick="addCart(${j})">Thêm giỏ</button>
            </div>
            </div>
            `
            countTablet++;
        }
        if(countTablet == 5){
            break
        }
    }
    for(let k = 0; k < data.length; k++){
        if(data[k].type == "laptop"){
            showproductlaptop +=
            `
            <div style =" padding-top: 16px;
            width: 20%;
            float: left;">
            <img src="./image/img-product/${data[k].image}" width="190px" height="190px" alt="">
            <div class="content-item">
                <a class="detail-product" onclick="detailClick(${k})">${data[k].name}</a>
            </div>
            <strong class="price-item">${data[k].price}đ</strong>
            <div class="btn-item">
                <a onclick="buyProduct()" class="buy-btn">Mua ngay</a>
                <button class="add-cart" onclick="addCart(${k})">Thêm giỏ</button>
            </div>
            </div>
            `
            countLaptop++;
        }
        if(countLaptop == 5){
            break
        }
    }
    console.log(countMobile);
    document.getElementById("product-mobile-item").innerHTML = showproductmobile;
    document.getElementById("product-tablet-item").innerHTML = showproducttablet;
    document.getElementById("product-laptop-item").innerHTML = showproductlaptop;
}

let count = 0;
for(let i = 2; i <= 40; i+2){
    count++
}
console.log(count)