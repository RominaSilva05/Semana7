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
let camposVacios = true;
if (!nombre || !apellido || !email || !password1 || !password2) {
    camposVacios = false;
}
//Contraseñas diferentes.
let contraseniasDiferentes = true;
if (password1 !== password2) {
    contraseniasDiferentes = false;
}
//Caracteres contraseñas.
let contraseniaCorta = true;
if (password1.length() >= 6) {
    contraseniaCorta = false;
}
//Terminos aceptados.
let terminosNoAceptados = true;
if (!terminos) {
    terminosNoAceptados = false;
}
//Validacion.
if (camposVacios == false || contraseniasDiferentes == false || contraseniaCorta == false || terminosNoAceptados == false) {
    showAlertSuccess();
} else {
    showAlertError();
}