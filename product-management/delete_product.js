function deleteProduct(i) {
    let data = JSON.parse(localStorage.getItem('DataProduct'));
    let confirmDeleteProduct = confirm(`Bạn có chắc chắn muốn xóa ${data[i].name} ?`);
    if (confirmDeleteProduct){
        data.splice(i, 1);
    }
    localStorage.setItem('DataProduct', JSON.stringify(data))
    showProductDiv()
}