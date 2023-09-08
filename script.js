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
const listaArtista = document.querySelector('.Lista-Artista')
const decoradorSpotLuz = document.querySelector('.Decorador-Spot-Luz')

listaArtista.addEventListener('click' , () => {
    cardBioArtista.classList.add('Aberto')
    decoradorSpotLuz.classList.add('Ativo')
})


const botaoFecahrCardBioArtista = document.querySelector('.Botao-Fechar-Card-Bio-Artista')
botaoFecahrCardBioArtista.addEventListener('click' , () => {
    cardBioArtista.classList.remove('Aberto')
    decoradorSpotLuz.classList.remove('Ativo')
})