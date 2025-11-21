class TiendaController {
    constructor() {
        this.model = new ProductModel();
        this.view  = new ProductView();
    }

    init() {
        const productos = this.model.getAll();
        this.view.renderList(productos);
    }
}
