function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto_crianca_m_p.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto_adolescente_m_p.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto_homem_p.png')
            } else {
                img.setAttribute('src', 'imagens/foto_idoso_m_p.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src', 'imagens/foto_crianca_f_p.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/foto_adolescente_f_p.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/foto_mulher_p.png')
            } else {
                img.setAttribute('src', 'imagens/foto_idoso_f_p.png')    
            }
        }
        res.innerHTML = `Destectamos ${gênero} com idade calculada de ${idade} anos.`
        res.appendChild(img)
    }
}