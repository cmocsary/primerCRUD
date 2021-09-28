let validarCampoRequerido = (entrada) => {
  console.log(entrada);

  if (entrada.value && entrada.value.length >= 3) {
    //console.log("ok");
    entrada.className = "form-control is-valid";
    return true;
  } else {
    //console.log("ingrese un nro");
    entrada.className = "form-control is-invalid";
    return false;
  }
};

//validar con expresiones regulares
let validarNumeros = (entrada) => {
  let patron = /^[0-9]{1,5}$/;
  if (patron.test(entrada.value)) {
    entrada.className = "form-control is-valid";
    return true;
  } else {
    entrada.className = "form-control is-invalid";
    return false;
  }
};

let validarURL = (entrada) => {
  let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/;
  if (entrada.value.trim() != "" && patron.test(entrada.value.trim())) {
    entrada.className = "form-control is-valid";
    return true;
  } else {
    entrada.className = "form-control is-invalid";
    return false;
  }
};

let validarCodigo = (entrada) => {
  if (entrada.value.trim() != "" && entrada.value.trim().length >= 3) {
    entrada.className = "form-control is-valid";
    return true;
  } else {
    entrada.className = "form-control is-invalid";
    return false;
  }
};

//validar todos los campos pasando por parametro el evento
let validarGeneral = (event) => {
  event.preventDefault();
  
  let alerta = document.querySelector("#msjAlert");

  if (
    validarCodigo(document.querySelector("#codigo")) &&
    validarCampoRequerido(document.querySelector("#producto")) &&
    validarCampoRequerido(document.querySelector("#descripcion")) &&
    validarNumeros(document.querySelector("#cantidad")) &&
    validarURL(document.querySelector("#url"))
  ) {
    console.log("Validacion correcta");
    alerta.className = 'alert alert-danger mt-4 d-none'
  } else {
    console.log("Validacion incorrecta");
    alerta.className = 'alert alert-danger mt-4'
  }
};

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
  validarNumeros(cantidad);
});
descripcion.addEventListener("blur", () => {
  validarCampoRequerido(descripcion);
});
codigo.addEventListener("blur", () => {
  validarCodigo(codigo);
});
url.addEventListener("blur", () => {
  validarURL(url);
});
formulario.addEventListener("submit", validarGeneral);
