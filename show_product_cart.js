function showProductCart(){
    let dataCart = JSON.parse(localStorage.getItem('DataCart'))
    let quantityproduct = "";
    let totalPrice = 0;
    for(i = 0; i < dataCart.length; i++){
        totalPrice += dataCart[i].price*dataCart[i].quantity
            quantityproduct += `
                        <tr style="padding-top 16px">
                            <td>  
                                <img src=./image/img-product/${dataCart[i].image}" width="90px" height="90px">
                            </td>
                            <td>
                                <h3>${dataCart[i].name}</h3>
                            </td>
                            <td>
                                <button onclick="increaseBtn(${i})">+</button>
                                <input type="text" id="quantity-input" value="${dataCart[i].quantity}" style="width: 20px;">
                                <button onclick="reductionBtn(${i})">-</button><br>
                                <input type="button" onclick="removeCart(${i})" value="Xoa">
                            </td>
                            <td style="text-align: right;">
                                <strong class="price-item">${dataCart[i].price*dataCart[i].quantity}đ</strong>
                            </td>
                        </tr>
            `
    }
    quantityproduct += `
    <tr>
    <td colspan="4" style="text-align: right; border-top: 2px solid; padding-top: 16px;">
        <strong class="price-item">Tổng tiền: ${totalPrice}đ</strong>
    </td>
    </tr>
    <tr>
    <td colspan="4" style="text-align: right; padding-top: 16px;">
            <button class="add-cart" onclick="buyProduct()">Thanh toán</button>
    </td>
    </tr>
    `
    document.getElementById("tab-cart").innerHTML = quantityproduct;
}