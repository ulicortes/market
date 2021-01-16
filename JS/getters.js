let content = document.getElementById('content');
let prod = document.getElementById('div-prod');
let buy = document.getElementById('div-list');
let thead = document.getElementById('thead');
let tbody = document.getElementById('tbody');
let coThead = document.getElementById('compraThead');
let coTbody = document.getElementById('compraTbody');
let list = document.getElementById('list');
let btn = document.getElementById('btn');
let img = document.getElementById('img');
let img1 = document.getElementById('img1');
let p = document.getElementById('precio-a-pagar');
let carrito = document.getElementById('carrito');
let vaciar = document.getElementById('botoncomprar');
let personal = document.getElementById('personal')
////////////////////////////////////////////////////////////
// GETTERS DE LA PAGINA PERSONAL
let content1 = document.getElementById('content1');
let prod1 = document.getElementById('div-prod1');
let thead1 = document.getElementById('thead1');
let tbody1 = document.getElementById('tbody1');
let tabla = document.getElementById('tabla');
let usuario = document.getElementById('usuario');
let contraseña = document.getElementById('contraseña');
let logear = document.getElementById('log');
let ing = document.getElementById('ingreso');
let nuevo = document.getElementById('new');
// let editar = document.getElementById('edi');
// let borrar = document.getElementById('bor');
let cerrar = document.getElementById('close');
let divAdd = document.getElementById('add-prod')
let code = document.getElementById('codigo');
let product = document.getElementById('producto');
let price = document.getElementById('precio');
let cuantity = document.getElementById('cantidad');
let stock = document.getElementById('stock');
let send = document.getElementById('enviar');
let back = document.getElementById('back');

// FETCH PARA OBTENER LOS PRODUCTOS DE UNA API
let getProd = () => {
    fetch("https://5fe7a5b2010a670017803bd3.mockapi.io/market")
    .then((res) => res.json().then((items) => (listaProd = items))
    .then ((listaProd)=> {
        header();
        show(listaProd);
    }))
}
let getProd1 = () => {
    fetch("https://5fe7a5b2010a670017803bd3.mockapi.io/market")
    .then((res) => res.json().then((items) => (listaProd = items))
    .then ((listaProd)=> {
        console.log(listaProd);
        header1();
        show1(listaProd);
    }))
}
let editProd = (idprod, modprod) => {
    fetch(`https://5fe7a5b2010a670017803bd3.mockapi.io/market/${idprod}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(modprod),
    }).then((res) => {
        if (res.ok) {
            console.log("Cliente editado");
            console.log(co);
            console.log(compras.length);
            if (co == compras.length) {
                vaciar.disabled = false;
                alert("La compra se ha realizado exitosamente! Muchas gracias por comprar")
            }
        };
    })
};
let add = (nuevo) => {
    fetch("https://5fe7a5b2010a670017803bd3.mockapi.io/market", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    })
    .then((res) => {
        console.log("Cliente agregado", res);
        location.reload();
    })
    .catch((error) => console(error));
};
let deleteP = (id) => {
    fetch(`https://5fe7a5b2010a670017803bd3.mockapi.io/market/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        console.log("Cliente eliminado");
        location.reload();
      } else {
        console.log("No se pudo eliminar el cliente");
      }
    });
};