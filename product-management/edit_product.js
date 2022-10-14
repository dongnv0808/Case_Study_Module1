function editProduct(i) {
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let editInput = "";
    editInput +=
        `
            <input type="text" id="edit-idproduct" placeholder="Mã sản phẩm">
            <input type="text" id="edit-image" placeholder="Image">
            <input type="text" id="edit-name" placeholder="Tên">
            <input type="text" id="edit-type" placeholder="Loại">
            <input type="text" id="edit-quantity" placeholder="Số lượng">
            <input type="text" id="edit-price" placeholder="Giá">
            <input type="text" id="edit-display" placeholder="Màn hình">
            <input type="text" id="edit-chip" placeholder="Chip">
            <input type="text" id="edit-ram" placeholder="Ram">
            <input type="text" id="edit-hdh" placeholder="Hệ điều hành">
            <input type="text" id="edit-pin" placeholder="Pin">
            <button onclick="saveProduct(${i})">Lưu</button><br>
    `
    document.getElementById("edit-show").innerHTML = editInput;
    document.getElementById("edit-idproduct").value = data[i].idproduct;
    document.getElementById("edit-image").value = data[i].image;
    document.getElementById("edit-name").value = data[i].name;
    document.getElementById("edit-type").value = data[i].type;
    document.getElementById("edit-quantity").value = data[i].quantity;
    document.getElementById("edit-price").value = data[i].price;
    document.getElementById("edit-display").value = data[i].display;
    document.getElementById("edit-chip").value = data[i].chip;
    document.getElementById("edit-ram").value = data[i].ram;
    document.getElementById("edit-hdh").value = data[i].hdh;
    document.getElementById("edit-pin").value = data[i].pin;
}

function saveProduct(i) {
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    data[i].idproduct = document.getElementById("edit-idproduct").value;
    data[i].image = document.getElementById("edit-image").value;
    data[i].name = document.getElementById("edit-name").value;
    data[i].type = document.getElementById("edit-type").value;
    data[i].quantity = document.getElementById("edit-quantity").value;
    data[i].price = document.getElementById("edit-price").value;
    data[i].display = document.getElementById("edit-display").value;
    data[i].chip = document.getElementById("edit-chip").value;
    data[i].ram = document.getElementById("edit-ram").value;
    data[i].hdh = document.getElementById("edit-hdh").value;
    data[i].pin = document.getElementById("edit-pin").value;
    localStorage.setItem('DataProduct', JSON.stringify(data));
    showProductDiv()
}