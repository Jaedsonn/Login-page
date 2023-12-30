function login() {
    var confirmar = document.getElementById("confirm").value
    var ponha = document.getElementById("put").value
    var alerta = document.getElementById("alert")
    if(ponha == confirmar) {
        alerta.style.top = "-12%"
    } else{
        alerta.style.top = "2%"
    }
} 

function sair(){
    var sair = document.getElementById("alert")
    sair.style.top = "-12%"
}
