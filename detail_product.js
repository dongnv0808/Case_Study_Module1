function detailProduct(i){
    console.log(i)
    data = JSON.parse(localStorage.getItem('DataProduct'));
    let detailproduct = "";
    detailproduct += 
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
    document.getElementById("product-mobile-item-detail").innerHTML = detailproduct;
}