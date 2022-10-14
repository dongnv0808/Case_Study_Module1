function deleteAllProduct() {
    let confirmDeleteAll = confirm(`Bạn có chắc muốn xóa tất cả không?`);
    if (confirmDeleteAll) {
        localStorage.clear();
        showProductDiv()
    }
}

showProductDiv();
