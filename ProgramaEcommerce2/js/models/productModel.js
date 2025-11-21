class ProductModel {
    constructor() {
        this.productos = {
            pro1: { id:"pro1", nombre:"Jeans Sueltos Negros", precio:65.0, imagenes:["img/products/pro1.jpg"], color:"Negro clásico", tallas:["S","M","L","XL","XXL"] },
            pro2: { id:"pro2", nombre:"Superman Cut-Off", precio:40.0, imagenes:["img/products/pro2.jpg"], color:"Azul", tallas:["S","M","L"] },
            pro3: { id:"pro3", nombre:"Pantalones Deportivos Grises", precio:35.0, imagenes:["img/products/pro3.jpg"], color:"Gris", tallas:["M","L","XL"] },
            pro4: { id:"pro4", nombre:"Mineral Hoodie", precio:52.0, imagenes:["img/products/pro4.jpg"], color:"Gris", tallas:["S","M","L","XL"] },
            pro5: { id:"pro5", nombre:"Gorra Americana", precio:22.0, imagenes:["img/products/pro5.jpg"], color:"Negro", tallas:["Única"] }
        };
    }

    getAll() {
        return Object.values(this.productos);
    }

    getById(id) {
        return this.productos[id] || null;
    }
}
