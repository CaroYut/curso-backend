class productManager {
    constructor() {
        this.productos = [];
        this.productoContadorId = 1;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const buscarProducto = this.productos.find((producto) => producto.code === code);
        buscarProducto
            ? console.log("El producto con ese codigo ya existe!") : !title || !description || !price || !thumbnail || !code || !stock
                ? console.log("Llenar campos")
                : this.productos.push({
                    title,
                    description,
                    price,
                    thumbnail,
                    code,
                    stock,
                    id: this.productoContadorId++,
                });
    };

    getProductos = () => this.productos;

    getProductById = (id) => {
        const productoId = this.productos.find((productoId) => productoId.id === id);
        console.log(productoId ? productoId : "Not found");
    };
}

const productos = new productManager();
productos.addProduct('producto1','es un producto',$10,'sin foto','10',5);
console.log(productos.getProductos());
