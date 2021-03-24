var productos = {
    "1": {
        "nombre": "Manzana",
        "modelo": "2020",
        "descripcion": "roja y grande",
        "precio": {
            "precioNormal": 14000,
            "precioRebaja": 12000
        }
    },


    "2": {
        "nombre": "Mango",
        "modelo": "2020",
        "descripcion": "amarillo y grande",
        "precio": {
            "precioNormal": 14000,
            "precioRebaja": 12000
        }
    }

}

function mostrarProductos() {
    console.log(productos[2].precio.precioNormal);
}