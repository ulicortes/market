let head = ["Codigo", "Producto", "Precio", "Cantidad", "Stock", " "];
prod1.classList.add("midle")
prod1.classList.add("hide")
divAdd.classList.add("hide")

let header1 = () => {
    let row = document.createElement('tr');
    for (let u = 0; u < 5; u++) {
        let th = document.createElement("th");
        th.innerText = head[u];
        th.classList.add("borders")
        row.appendChild(th);
        thead1.appendChild(row)
    }
}
let muestra1 = (listaProd) => {
    let row = document.createElement('tr');
    let celda1 = document.createElement('td');
    let bu = document.createElement('button');
    bu.innerText = "Borrar";
    celda1.appendChild(bu);
    for (i in listaProd) {
        let celda = document.createElement('td');
        celda.innerText = listaProd[i];
        row.appendChild(celda);
        row.appendChild(celda1)
        celda.classList.add("borders");
    }
    bu.addEventListener('click', () => {
        deleteP(listaProd.id)
    })
    return row
}
let show1 = (listaProd) => {
    for (let i = 0; i < listaProd.length; i++) {
        tbody1.appendChild(muestra1(listaProd[i]))
    }
}
let nuevoProducto = {
    id: "",
    producto: "",
    precio: "",
    cantidad: "",
    stock: ""
}

let mostrador = (a, b) => {
    a.id = b.length + 1;
    a.producto = product.value;
    a.precio = price.value;
    a.cantidad = cuantity.value;
    a.stock = stock.value;
}

logear.addEventListener('click', () => {
    if (usuario.value == "admin" & contraseña.value == "1234") {
        prod1.classList.remove("hide");
        ing.classList.add("hide");
        nuevo.hidden = false;
        // editar.hidden = false;
        // borrar.hidden = false;
        cerrar.hidden = false;
    } else {
        alert("Usuario o contraseña erroneos, intentelo de nuevo.")
    }
})
cerrar.addEventListener('click', () => {
    location.reload();
    prod1.classList.add("hide");
    ing.classList.remove("hide");
    nuevo.hidden = true;
    cerrar.hidden = true;
})
nuevo.addEventListener('click', () => {
    prod1.classList.add("hide");
    divAdd.classList.remove("hide")
})
send.addEventListener('click', () => {
    mostrador(nuevoProducto, listaProd);
    add(nuevoProducto);
})
back.addEventListener('click', () => {
    prod1.classList.remove("hide");
    divAdd.classList.add("hide")
})
getProd1();