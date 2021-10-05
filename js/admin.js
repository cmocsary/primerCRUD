import {
  validarCampoRequerido,
  validarCodigo,
  validarNumeros,
  validarGeneral,
  validarURL,
} from "./validaciones.js";

import { Producto } from "./productoClass.js";

let listaProductos = [];

// este archivo tendra toda la logica del ABM o CRUD
//manejando eventos desde js
let producto = document.querySelector("#producto");
let cantidad = document.querySelector("#cantidad");
let codigo = document.querySelector("#codigo");
let descripcion = document.querySelector("#descripcion");
let url = document.querySelector("#url");
let formulario = document.querySelector("#formProducto");

producto.addEventListener("blur", () => {
  validarCampoRequerido(producto);
});
cantidad.addEventListener("blur", () => {
  validarCampoRequerido(cantidad);
});
descripcion.addEventListener("blur", () => {
  validarCampoRequerido(descripcion);
});
codigo.addEventListener("blur", () => {
  validarCampoRequerido(codigo);
});
url.addEventListener("blur", () => {
  validarCampoRequerido(url);
});

formulario.addEventListener("submit", guardarProducto);

//verificar si hay datos en localstorage
cargaInicial();

function guardarProducto(e) {
  e.preventDefault();
  if (validarGeneral()) {
    agregarProducto();
  } else {
    console.log("aqui solo mostrar el cartel de error");
  }
}

function agregarProducto() {
  let productoNuevo = new Producto(
    codigo.value,
    producto.value,
    descripcion.value,
    cantidad.value,
    url.value
  );

  listaProductos.push(productoNuevo);
  console.log(listaProductos);

  localStorage.setItem("listaProductosKey", JSON.stringify(listaProductos));
  
  crearFila(productoNuevo);
}

function cargaInicial() {
  listaProductos = JSON.parse(localStorage.getItem("listaProductosKey")) || [];
  console.log(listaProductos);

  listaProductos.forEach(itemProducto => {
    crearFila();
  });
}

function crearFila(itemProducto) {

  //traigo primero el nodo padre
  let tabla = document.querySelector("#tablaProductos");
  //console.log(tabla);

  tabla.innerHTML += `<tr>
  <th scope="row">${itemProducto.codigo}</th>
  <td>${itemProducto.producto}</td>
  <td>${itemProducto.descripcion}</td>
  <td>${itemProducto.cantidad}</td>
  <td>${itemProducto.url}</td>
  <td>
    <button class="btn btn-warning">Editar</button>
    <button class="btn btn-danger">Borrar</button>
  </td>
</tr>`
}

function limpiarFormulario(){
  formulario.reset();

  codigo.className = 'form-control';
  
}
