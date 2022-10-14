class Product {
    idproduct;
    image;
    name;
    quantity;
    type;
    price;
    display;
    chip;
    ram;
    hdh;
    pin;
    constructor(idproduct, image, name, quantity, type, price, display, chip, ram, hdh, pin) {
        this.idproduct = idproduct;
        this.image = image;
        this.name = name;
        this.quantity = quantity;
        this.type = type;
        this.price = price;
        this.display = display;
        this.chip = chip;
        this.ram = ram;
        this.hdh = hdh;
        this.pin = pin;
    }
    getIdProductTest() {
        return this.idproduct;
    }
    setIdproduct(idproduct) {
        this.idproduct = idproduct;
    }
    getImage() {
        return this.image;
    }
    setImage(image) {
        this.image = image;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getQuantity() {
        return this.quantity
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getDisplay(){
        return this.display = display;
    }
    setDisplay(display){
        this.display = display;
    }
    getChip(){
        return this.chip = chip;
    }
    setChip(chip){
        this.chip = chip;
    }
    getRam(){
        return this.ram = ram;
    }
    setRam(ram){
        this.ram = ram;
    }
    getHdh(){
        return this.hdh = hdh;
    }
    setHdh(hdh){
        this.hdh = hdh;
    }
    getPin(){
        return this.pin = pin;
    }
    setPin(pin){
        this.pin = pin;
    }
}