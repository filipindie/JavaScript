function verificar () {
    // window.alert('funcionou')
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        // window.alert('tudo ok!')
        var fSex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        // res.innerHTML = `Idade calculada ${idade}`
        var Gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criançamenino.png')
            }else if(idade > 11 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovemhomem.png')
            }else if(idade < 50) {
                //Adulto
                // img.setAttribute('src', 'adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosohomem.png')
            }
        }else if (fSex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //Criança
                img.setAttribute('src', 'criançamenina.png')
            }else if(idade > 11 && idade <= 21) {
                //Jovem
                img.setAttribute('src', 'jovemmulher.png')
            }else if(idade < 50) {
                //Adulto
                // img.setAttribute('src', 'adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)//vai acrescentar a imagem após o de cima.
    }
}