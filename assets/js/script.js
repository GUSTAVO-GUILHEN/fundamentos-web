/* Case Sensitive
por Tag: getElementByTagName()
por Id:  getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 ||email.value.indexOf('.') == -1 ){
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }else{
        txtEmail.innerHTML = 'Email Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Máximo de 100 caracteres'
        txtAssunto.style.color = 'red'
        assuntoOk = false
        //txtAssunto.style.display = 'block'
    }else{
        //txtAssunto.style.display = 'none'
       txtAssunto.innerHTML = ''
       assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Enviado com Sucesso!')
    }else if(nomeOk == false && emailOk == true && assuntoOk == true){
        alert('Digite o Nome Corretamente')
    }else if(nomeOk == true && emailOk == false && assuntoOk == true){
        alert('Digite o Email Corretamente')
    }else if (nomeOk == true && emailOk == true && assuntoOk == false){
        alert('Digite o Assunto Corretamente')
    }else{
        alert ('Preencha o formulario corretamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '500px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}