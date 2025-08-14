function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById("regBtn").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let email = document.getElementById("email").value.trim();
    let password1 = document.getElementById("password1").value.trim();
    let password2 = document.getElementById("password2").value.trim();
    let terminos = document.getElementById("terminos").checked;
    
    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
    } else if (password1 !== password2){
        showAlertError();
    } else if (password1.length() >= 6){
        showAlertError();
    } else if (!terminos) {
        showAlertError();
    } 
     else {
        showAlertSuccess();
    }
})

//Solucion 2
//Validacion con true y false.
//Ningun campo vacio
let camposVacios = false;
if (!nombre || !apellido || !email || !password1 || !password2) {
    camposVacios = true;
}
//Contraseñas diferentes.
let contraseniasDiferentes = false;
if (password1 !== password2) {
    contraseniasDiferentes = true;
}
//Caracteres contraseñas.
let contraseniaCorta = false;
if (password1.length() >= 6) {
    contraseniaCorta = true;
}
//Terminos aceptados.
let terminosAceptados = false;
if (!terminos) {
    terminosAceptados = true;
}
//Validacion.
if (camposVacios == true || contraseniasDiferentes == true || contraseniaCorta == true || terminosAceptados == true) {
    showAlertSuccess();
} else {
    showAlertError();
}