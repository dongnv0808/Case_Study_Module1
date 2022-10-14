function checkInput(){
    let data = JSON.parse(localStorage.getItem("DataProduct"));
    let valueInput = document.getElementById("input-search").value;
    let showProductSearch = "";
    let showProductSearch1 = "";
    showProductSearch += `
    <div class="product-list">
            <div class="product-title">
                <h1>Tìm Kiếm</h1>
            </div>
            <div id="product-mobile-list-item">
            </div>
    </div>
    `
    document.getElementById("product").innerHTML = showProductSearch;
    for(let i = 0; i < data.length; i++){
        let dataName = data[i].name;
        let a = dataName.toUpperCase();
        let b = valueInput.toUpperCase();
        let result = a.includes(b);
        console.log(result)
        if(result){
            showProductSearch1 +=
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
    document.getElementById("product-mobile-list-item").innerHTML = showProductSearch1;
}