function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var corpo = window.document.body
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos. `
    if (hora >= 0 && hora < 6) {
        img.src = 'images/madrugada.png'
        corpo.style.background = '#101622'
        //Boa Madrugada
    } else if (hora >= 6 && hora < 12){
        img.src = 'images/manha.png'
        corpo.style.background = '#fce2a9'
        //Bom dia
    } else if (hora >= 12 && hora < 18){
        img.src = 'images/tarde.png'
        corpo.style.background = '#a6715d'
        //Boa tarde
    } else {
        img.src = 'images/noite.png'
        corpo.style.background = '#1971b0' 
        //Boa noite
    }
}
