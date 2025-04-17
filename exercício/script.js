function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/imagem_manha_p.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'imagens/imagem_tarde_p.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'imagens/imagem_noite_p.jpg'
        document.body.style.background = '#515154'
    }
}