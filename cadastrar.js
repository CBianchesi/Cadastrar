var area = document.getElementById("area")
var area2 = document.getElementById("botao")
var nome1 = "Bianchesi"


function Entrar() {
    let nome = prompt("Digite seu nome")

    if (nome == "" || nome == null) {
        alert("Algo de errado")
        
    }
    else if (nome == nome1) {
        botao=document.getElementById("botao")
        botao.setAttribute("hidden",true)
        area.innerHTML = "Seja bem vindo " + nome1 + "<br>"
    }
    else{
        area.innerHTML = "Entrar com nome correto"
    }
    



    document.createElement("br")
    let botaoSair = document.createElement("Button")
    botaoSair.innerText = "Sair da conta"
    botaoSair.onclick = sair
    area.appendChild(botaoSair)

}
function sair() {
    alert("Até mais")
    area.innerHTML = "Você saiu!!!!!!!!!!"
    botao=document.getElementById("botao")
    botao.removeAttribute("hidden")
}