function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/bebe-h.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-h.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto-h.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso-h.png') 
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'images/bebe-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'images/jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'images/adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'images/idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}