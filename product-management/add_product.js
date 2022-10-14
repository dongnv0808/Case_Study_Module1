function addProduct() {
    let data = JSON.parse(localStorage.getItem('DataProduct')) ? JSON.parse(localStorage.getItem('DataProduct')) : [];
    let products = new Product(idproduct, image, name, price, type, quantity, display, chip, ram, hdh, pin)
    products.idproduct = document.getElementById("idproduct").value;
    products.image = document.getElementById("image").value;
    products.name = document.getElementById("name").value;
    products.price = document.getElementById("price").value;
    products.type = document.getElementById("type").value;
    products.quantity = document.getElementById("quantity").value;
    products.display = document.getElementById("display").value;
    products.chip = document.getElementById("chip").value;
    products.ram = document.getElementById("ram").value;
    products.hdh = document.getElementById("hdh").value;
    products.pin = document.getElementById("pin").value;
    if (!data) {
        data = [];
    }
    data.push(products);
    localStorage.setItem('DataProduct', JSON.stringify(data));
    showProductDiv()
}