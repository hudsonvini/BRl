console.log('Olá mundo')

/*Abertura e Fechamento de Card Saiba Mias*/
const backgroundBlind = document.querySelector('.Background-Blind');
const cardSaibaMais = document.querySelector('.Card-Saiba-Mais');
const botaoSaibaMais = document.querySelector('.Botao-Local');


botaoSaibaMais.addEventListener('click', () => {
    backgroundBlind.classList.add('Ativo');
    cardSaibaMais.classList.add('Aberto')
});


const botaoFecahrCardSaibaMais = document.querySelector('.Botao-Fechar-Card-Saiba-Mais');
botaoFecahrCardSaibaMais.addEventListener('click', () => {
    backgroundBlind.classList.remove('Ativo');
    cardSaibaMais.classList.remove('Aberto')
});


/*Abertura e Fecahmento do Card Bio Artista*/
const cardBioArtista = document.querySelector('.Card-Bio-Artista')
const ListaArtistas = document.querySelectorAll('.Artista')
const decoradorSpotLuz = document.querySelector('.Decorador-Spot-Luz')


let LineUp = {
    artista1 : {
        nome : 'Veigh',
        arroba : '@thiagoVeigh7',
        Bio : 'Thiago Veigh, 22 anos, nasceu e cresceu na cidade de Itapevi, na zona oeste de São Paulo, e é cantor e compositor do gênero trap, uma variação do rap.<br><br> Com voz forte e melódica, um beat eletrônico grave e letras profundas sobre emoções e críticas sociais, o artista começou sua carreira com seu amigo Heitor, no extinto duo Constelação.<br><br> Nos anos 2018 e 2019, o Constelação lançou quatro músicas produzidas pela Covil Corporation, um estúdio de gravação com sede em Itapevi. Na época, ele conheceu o produtor André Nagalli e decidiu lançar sua primeira faixa fora do duo, intitulada Indispensável.',
        imagem : 'https://akamai.sscdn.co/letras/215x215/fotos/2/a/7/a/2a7a8d66f637b255b96f6c03382c4861.jpg'

    },

    artista2 : {
        nome : 'Anitta',
        arroba : '@anitta',
        Bio : 'Thiago Veigh, 22 anos, nasceu e cresceu na cidade de Itapevi, na zona oeste de São Paulo, e é cantor e compositor do gênero trap, uma variação do rap.<br><br> Com voz forte e melódica, um beat eletrônico grave e letras profundas sobre emoções e críticas sociais, o artista começou sua carreira com seu amigo Heitor, no extinto duo Constelação.<br><br> Nos anos 2018 e 2019, o Constelação lançou quatro músicas produzidas pela Covil Corporation, um estúdio de gravação com sede em Itapevi. Na época, ele conheceu o produtor André Nagalli e decidiu lançar sua primeira faixa fora do duo, intitulada Indispensável.',
        imagem : 'https://istoe.com.br/wp-content/uploads/2023/08/anitta.jpeg'
    },

    artista3 : {
        nome : 'Matue',
        arroba : '@matue',
        Bio : 'Thiago Veigh, 22 anos, nasceu e cresceu na cidade de Itapevi, na zona oeste de São Paulo, e é cantor e compositor do gênero trap, uma variação do rap.<br><br> Com voz forte e melódica, um beat eletrônico grave e letras profundas sobre emoções e críticas sociais, o artista começou sua carreira com seu amigo Heitor, no extinto duo Constelação.<br><br> Nos anos 2018 e 2019, o Constelação lançou quatro músicas produzidas pela Covil Corporation, um estúdio de gravação com sede em Itapevi. Na época, ele conheceu o produtor André Nagalli e decidiu lançar sua primeira faixa fora do duo, intitulada Indispensável.',
        imagem : 'https://images.genius.com/f69f4a2ff3be6790c0762a39dc5566f5.640x640x1.jpg'
    },

    artista4 : {
        nome : 'Kayblack',
        arroba : '@realkayblack',
        Bio : 'Thiago Veigh, 22 anos, nasceu e cresceu na cidade de Itapevi, na zona oeste de São Paulo, e é cantor e compositor do gênero trap, uma variação do rap.<br><br> Com voz forte e melódica, um beat eletrônico grave e letras profundas sobre emoções e críticas sociais, o artista começou sua carreira com seu amigo Heitor, no extinto duo Constelação.<br><br> Nos anos 2018 e 2019, o Constelação lançou quatro músicas produzidas pela Covil Corporation, um estúdio de gravação com sede em Itapevi. Na época, ele conheceu o produtor André Nagalli e decidiu lançar sua primeira faixa fora do duo, intitulada Indispensável.',
        imagem : 'https://s2.glbimg.com/Mk_q8SQEZ0AkJjwbppB_kbKIXPE=/0x0:3648x4880/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2023/r/Y/2qMrFqSY6Me6iBpUz26w/102750176-sc-kayblack-lovesongs.jpg'
    }
}


ListaArtistas.forEach((Artista) => {
    Artista.addEventListener('click' , () => {
        cardBioArtista.classList.add('Aberto')
        decoradorSpotLuz.classList.add('Ativo')
        /*Add Imagem*/
        const fotoArtista = document.querySelector('.Area-Foto-Artista img')
        fotoArtista.src = LineUp[Artista.id].imagem
        /*Add nome */
        const nomeArtista = document.querySelector('.Area-Bio-Artista h2')
        nomeArtista.innerHTML = 'Quem é ' + LineUp[Artista.id].nome + ' ?'
        /*Add @*/
        const arrobaArtista = document.querySelector('.Area-Foto-Artista p')
        arrobaArtista.innerHTML = LineUp[Artista.id].arroba
        /*Add Bio*/
        const bioArtista = document.querySelector('.Area-Bio-Artista p')
        bioArtista.innerHTML = LineUp[Artista.id].Bio

    })
})



const botaoFecahrCardBioArtista = document.querySelector('.Botao-Fechar-Card-Bio-Artista')
botaoFecahrCardBioArtista.addEventListener('click' , () => {
    cardBioArtista.classList.remove('Aberto')
    decoradorSpotLuz.classList.remove('Ativo')
})

