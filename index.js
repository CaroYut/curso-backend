class productManager {
    static last_id = 0;
    constructor (){
    this.productos = [];
    }

    addProduct = (title,description,price,thumbnail,code,stock) => {
        productManager.last_id ++
        const arrayProductos = {
            title : "Lemon pie",
            description : "tarta de limon y merengue",
            price : $1000,
            thumbnail : "sin imagen",
            code : 01,
            stock : 10,
            id : productManager.last_id
            }
        this.productos.push(arrayProductos)
    }
    
    getProductos () {
     console.log(arrayProductos)
     }       
                
    getProductById () {
    if (arrayProductos.includes(id)) {
    console.log("El producto con su id se encuentra")
    } else {
    console.log("Not Found")
    }
    
    }
}