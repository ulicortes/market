// HEADER DE LA TABLA DE PRODUCTOS
let head = ["Producto", "Precio", "Cantidad", "Stock", " "];
// SE AGREGAN CLASES 
content.classList.add("disp");
vaciar.classList.add("pad")
// CAMBIA EL CARRITO DEPENDIENDO SI ESTA LLENO O VACIO
let cartel = () => {
    if (lista.length !== 0) {
        img1.classList.remove("hide");
        img.classList.add("hide");
    }else if (lista.length == 0) {
        img.classList.remove("hide");
        img1.classList.add("hide");
    }
}   
// HEADER DE LA TABLA DE PRODUCTOS
let header = () => {
    let row = document.createElement('tr');
    for (let u = 0; u < 4; u++) {
        let th = document.createElement("th");
        th.innerText = head[u];
        th.classList.add("borders")
        row.appendChild(th);
        thead.appendChild(row)
    }
}
// FILAS DE LA TABLA DE PRODUCTOS
let muestra = (listaProd) => {
    let currentList = listaProd;
    let row = document.createElement('tr');
    let celdaBoton = document.createElement('td');
    let btn = document.createElement('button');
    btn.classList.add("pad");
    btn.innerText = "Agregar";
    celdaBoton.appendChild(btn);
    let a = " ";
    for (i in currentList) {
        let celda = document.createElement('td');
        celda.innerText = currentList[i];
        if (celda.innerText !== currentList.id) {
            row.appendChild(celda);
            row.appendChild(celdaBoton);
            celda.classList.add("borders");
            if (listaProd.stock == 0) {
                btn.disabled = true;
            }
        }
    }
    btn.addEventListener('click', () => {
        buton1(listaProd, a, currentList, btn);
        btnEventListener(p, precioFinal, btn, compras, listaProd)
        cartel(); 
    });
    return row
}
let btnEventListener = (a, b, c, d, e) => {
    a.innerHTML = `Total a pagar: $ ${b}.`;
    c.classList.add("hide");
    d.push(e);
}
// SE AGREGAN LAS FILAS AL BODY DE LA TABLA
let show = (listaProd) => {
    for (let i = 0; i < listaProd.length; i++) {
        tbody.appendChild(muestra(listaProd[i]))
    }
    p.innerHTML = `Total a pagar: $ ${precioFinal}.`;
    carrito.classList.add("hide");
    buy.classList.add("hide");
    vaciar.classList.add("hide");
    vaciar.addEventListener('click', () => {
        location.reload()
    })
}
//SE AGREGAN PRODUCTOS AL CARRITO
let buton1 = (l, a, cu, but) => {
    lista.push(a)
    show1(l, cu, but);
}
// SE CREAN LOS DIFERENTES BOTONES
let creating = (b, c, d, e, f, g) => {
    b.classList.add("pad");
    b.innerText = "Agregar";
    c.innerText = "-";
    c.disabled = true;
    d.innerText = "+";
    e.innerText = `${f}`;
    g.innerText = "Comprar";
}
// SE AGREGAN A LA FILA LOS DIFERENTES BOTONES CREADOS
let appending = (a, b, c, d, e, f, g, h, i, j) => {
    a.appendChild(b);
    a.appendChild(c);
    a.appendChild(d);
    a.appendChild(e);
    a.appendChild(f);
    a.appendChild(g);
    a.appendChild(h);
    a.appendChild(i);
    a.appendChild(j);
}
// SE LES ASIGNAN VALORES Y ATRIBUTOS A LOS DIFERENTES BOTONES
let modifications = (a, b, c, d, e, f, g, h) => {
    b.innerText = a.producto;
    c.innerText = a.precio;
    c.classList.add("hide")
    d.innerText = a.cantidad;
    d.classList.add("hide")
    e.innerText = `Cantidad: ${h}`
    f.innerText = "Quitar";
    f.classList.add("pad");
}
// FILAS DE LA TABLA DE PRODUCTOS DEL CARRITO
let muestra1 = (l, but) => {
    let row = document.createElement('tr');
    let btn = document.createElement('button');
    let celda = document.createElement('h5');
    let celda1 = document.createElement('h6');
    let celda2 = document.createElement('h6');
    let celda3 = document.createElement('h6');
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    let btnConfirm = document.createElement('button');
    let out = document.createElement('output');
    let cnt = 1;
    let pre;
    pre = l.precio.slice(1, 4);
    creating(btn, btn1, btn2, out, cnt, btnConfirm);
    modifications(l, celda, celda1, celda2, celda3, btn, row, cnt);
    appending(row, celda, celda1, celda2, celda3, btn, btn1, out, btn2, btnConfirm);
    btn.addEventListener('click', () => {
        buton2(row, pre, cnt);
        p.innerHTML = `Total a pagar: $ ${precioFinal}.`;
        cartel();
        but.classList.remove("hide")
        let nro = compras.indexOf(l)
        compras.splice(nro, 1);   
        console.log(compras);   
    });
    btn1.addEventListener('click', () => {
        if (out.innerText == 1) {
            btn1.disabled = true;
        } else {
            cnt--;
            out.innerText = `${cnt}`;
            btn2.disabled = false;
            precioFinal = precioFinal - parseInt(pre)
            p.innerText = `Total a pagar: $ ${precioFinal}.`;
            celda3.innerText = `Cantidad: ${cnt}`;
        }
    })
    btn2.addEventListener('click', () => {
        if (out.innerText == l.stock){
            btn2.disabled = true;
        } else {
            cnt++;
            out.innerText = `${cnt}`;
            btn1.disabled = false;
            precioFinal = precioFinal + parseInt(pre)
            p.innerText = `Total a pagar: $ ${precioFinal}.`;
            celda3.innerText = `Cantidad: ${cnt}`;
            console.log(l.stock); 
        }
    })
    celda.addEventListener('click', () => {
        celda1.classList.toggle("hide")
        celda2.classList.toggle("hide")
    })
    btnConfirm.addEventListener('click', () => {
        let y = new stuff (l.id, l.producto, l.precio, l.cantidad, cnt);
        console.log(compras);
        editProd(y.id, {...prodEditado, id: y.id, producto: y.producto, precio: y.precio, cantidad: y.cantidad, stock: (l.stock - y.stock).toString()})
        btn.classList.add("hide");
        btn1.classList.add("hide");
        btn2.classList.add("hide");
        out.classList.add("hide");
        co++;
    })
    return row
}
// SE AGREGAN LAS FILAS AL BODY DE LA TABLA DEL CARRITO
let show1 = (l, cu, but) => {
    coTbody.appendChild(muestra1(l, but, cu));
    buy.classList.add("borders2");
    let pre = (cu.precio.slice(1, 4))
    precioFinal = (precioFinal + parseInt(pre))
    p.innerHTML = `Total a pagar: $ ${precioFinal}.`;
}
// FUNCIONES DEL BOTON QUITAR
// SE RESTA EL TOTAL DEL PRECIO FINAL Y SE ELIMINA LA FILA DE LA COLUMNA DEL CARRITO
let buton2 = (p, i, ñ) => {
    coTbody.removeChild(p);
    lista.pop()
    precioFinal = precioFinal - (parseInt(i) * ñ);
}
// LISTENER DEL CARRITO, EN DONDE PUEDO OCULTAR O HACER APARECER LOS DATOS DE LOS ELEMENTOS DEL CARRITO
let boe = (q, a, b, c) => {
    q.addEventListener('click', () => {
        a.classList.toggle("hide")
        b.classList.toggle("hide");
        c.classList.toggle("hide");
    })
}
window.addEventListener('load', () => {
    getProd();
    boe(img1, buy, carrito, vaciar);
    boe(img, buy, carrito, vaciar);
})