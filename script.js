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


    cardSaibaMais.classList.add('Saida')
    backgroundBlind.classList.add('Saida')
    setTimeout(()=> {
        cardSaibaMais.classList.remove('Saida')
        backgroundBlind.classList.remove('Saida')

        cardSaibaMais.classList.remove('Aberto')
        backgroundBlind.classList.remove('Ativo')
    }, 1000)
});


/*Abertura e Fecahmento do Card Bio Artista*/
const cardBioArtista = document.querySelector('.Card-Bio-Artista')
const ListaArtistas = document.querySelectorAll('.Artista')
const decoradorSpotLuz = document.querySelector('.Decorador-Spot-Luz')


let LineUp = {
    artista1 : {
        nome : 'Seu Jorge',
        arroba : '@seujorge',
        Bio : 'Participou da formação da banda Farofa Carioca, que lançou seu primeiro CD em 1998 com uma mistura dos ritmos negros de várias partes do mundo, como samba, reggae, jongo, funk e rap. A partir daí, Seu Jorge teve sua carreira engrenada e passou a participar de vários projetos, como um disco de tributo a Tim Maia e a participação em estúdio, bem como a turnê da banda brasileira Planet Hemp, em 2000.<br><br> Participou também em diversos filmes em sua carreira, como Cidade de Deus, The life Aquatic, Tropa de Elite 2, The escapist, E ai comeu? entre outros. Seu Jorge é sobrinho de Jovelina Pérola Negra e primo do sambista Dudu Nobre. Ganhou o apelido do amigo Marcelo Yuka (1965 — 2019). Em 2012 participou da Cerimônia de Encerramento das Olimpíadas de Londres 2012, durante o segmento carioca. Cantou as músicas Nem Vem Que Não Tem de Wilson Simonal e Aquele Abraço de Gilberto Gil.',
        imagem : 'https://br.web.img3.acsta.net/c_310_420/pictures/18/05/28/18/25/3419262.jpg'

    },

    artista2 : {
        nome : 'Liniker',
        arroba : '@Liniker',
        Bio : 'Liniker de Barros Ferreira Campos (Araraquara, 3 de julho de 1995) é uma cantora, compositora, atriz e artista visual brasileira trans. Ex-integrante da banda Liniker e os Caramelows, compõe e canta canções dos gênero soul e black music.',
        imagem : 'https://upload.wikimedia.org/wikipedia/commons/1/12/Liniker_%2B_Tulipa_Ruiz_%2852189482079%29_%28cropped%29.jpg'
    },

    artista3 : {
        nome : 'Nx Zero',
        arroba : '@nxzero',
        Bio : 'NX Zero é uma banda brasileira de rock formada em 2001 na cidade de São Paulo. Composta por Di Ferrero (vocal), Gee Rocha (guitarra e vocal de apoio), Dani Weksler (bateria), Caco Grandino (baixo) e Fi Ricardo (guitarra). A partir de 2014, passou a ter também como membro de apoio nos teclados, Rafael Mimi, embora o músico não seja creditado oficialmente ou estrele os encartes dos álbuns.',
        imagem : 'https://cdn.pensador.com/img/authors/nx/ze/nxzero-l.jpg'
    },

    artista4 : {
        nome : 'Ney Matogrosso',
        arroba : '@neymatogrosso',
        Bio : 'Ney de Souza Pereira (Bela Vista, 1 de agosto de 1941), mais conhecido como Ney Matogrosso, é um cantor, compositor, dançarino, ator e diretor brasileiro. Ex-integrante dos Secos & Molhados (1973-1974), foi o artista que mais sobressaiu do grupo após iniciar sua carreira solo com o disco Água do Céu - Pássaro (1975) e com suas apresentações subsequentes. É considerado pela revista Rolling Stone como a terceira maior voz brasileira de todos os tempos e, pela mesma revista, trigésimo primeiro maior artista brasileiro de todos os tempos.<br><br>Embora tenha começado relativamente tarde, das canções poéticas e de gêneros híbridos dos Secos e Molhados passou a interpretar outros compositores do país, como Chico Buarque, Cartola, Rita Lee, Tom Jobim, construindo um repertório que prima pela qualidade e versatilidade. Em 1983, completava dez anos de estreia no cenário artístico e já possuía dois Discos de Platina e dois Discos de Ouro, inclusive pela enorme repercussão da canção "Homem com H" de 1981.',
        imagem : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS42q8Xz2cmpT6NHQccZDFWrN6UMJC7T-grAH225lEtUu8Sd8FReqBbP29XmBQK4z4SNeY&usqp=CAU'
    },

    artista5 : {
        nome : 'Gloria Groove',
        arroba : '@gloriagroove',
        Bio : 'Daniel Garcia Felicione Napoleão (São Paulo, 18 de janeiro de 1995), mais conhecido por seu nome artístico Gloria Groove, é um cantor, rapper, compositor, drag queen e dublador brasileiro. Iniciou sua carreira em 2002 no grupo Galera do Balão, nova versão da Turma do Balão Mágico. Em 2006, foi finalista do quadro de calouros Jovens Talentos, no Programa Raul Gil, pelo qual ganhou um convite para atuar na telenovela Bicho do Mato, na RecordTV, como filho de Beatriz Segall.<br><br> Na sequência, iniciou uma vasta carreira na dublagem, onde se tornou um dos principais nomes do mercado brasileiro. Em 2016, retornou à música como drag queen com a faixa "Dona", emplacando outros sucessos como "Império", "Catuaba", "Gloriosa", "Muleke Brasileiro", "Bumbum de Ouro", "Arrasta" e "Coisa Boa".',
        imagem : 'https://cdns-images.dzcdn.net/images/artist/22e5f8666bb46f2c1f5b088b58e4548d/500x500.jpg'
    },

    artista6 : {
        nome : 'Baianasystem',
        arroba : '@baianasystem',
        Bio : 'BaianaSystem é uma banda brasileira de reggae fundada no ano de 2009, em Salvador, Bahia.Em 2016, o grupo ganhou visibilidade internacional com a faixa "Playsom", que faz parte da trilha sonora do jogo eletrônico FIFA 16. A canção faz parte do segundo álbum do grupo, Duas Cidades.<br><br>A banda ganhou o prêmio de melhor álbum de rock ou música alternativa em língua portuguesa, com o disco O Futuro não demora, no Grammy Latino de 2019, em cerimônia realizada no MGM Grand Garden Arena, em Las Vegas.',
        imagem : 'https://akamai.sscdn.co/tb/letras-blog/wp-content/uploads/2022/08/78299bc-BaianaSystem_As_Melhores_1390x780.jpg'
    },

    artista7 : {
        nome : 'Armandinho',
        arroba : '@armandinho',
        Bio : 'Armando Antônio Silveira da Silveira (Porto Alegre, 22 de janeiro de 1970), mais conhecido pelo seu nome artístico Armandinho, é um cantor e compositor brasileiro. Em 2002, lançou seu álbum de estreia, Armandinho, com o selo gaúcho Orbeat Music. Balanço da Rede abre o trabalho, com forte ênfase na “pegada” reggae. Sucessos como Ursinho de Dormir, Reggae das Tramanda", Sentimento e Outra Noite que se Vai fazem parte do álbum. Seu segundo disco, Casinha, foi lançado em 2004. O álbum trouxe pela primeira vez o grande sucesso "Desenho de Deus", além de uma regravação da canção O Leãozinho, de Caetano Veloso. Em 2006, assinou com a Universal Music e lançou seu primeiro álbum ao vivo, Armandinho ao Vivo, trabalho que o fez conhecido no Brasil inteiro. Gravado na cidade de Camboriú, o DVD traz todos os hits de Armandinho até então.<br><br>Em 2007, lança o quarto álbum de sua carreira, Semente, título da primeira música de trabalho do álbum. Em 2008, o cantor e a gravadora resolveram inovar e lançaram o maxi single Madeira, um EP digital com quatro músicas inéditas por preço acessível.',
        imagem : 'https://akamai.sscdn.co/uploadfile/letras/fotos/0/5/d/3/05d3e2e2988412a110c09e1808e881bf.jpg'
    },

    artista8 : {
        nome : 'Nação Zumbi',
        arroba : '@nacaozumbi',
        Bio : 'Nação Zumbi (originalmente Chico Science e Nação Zumbi) é uma banda brasileira, nascida no início da década de 1990 na cidade do Recife. Surgiu da união do Loustal, banda de pós-punk, com o bloco de samba-reggae Lamento Negro, liderada pelo vocalista e compositor Chico Science. Ao lado da banda Mundo Livre S/A, foi responsável pela criação do movimento cultural manguebeat. Com Chico Science, gravou apenas dois álbuns, ambos discos de ouro, que contaram com participações especiais de grandes nomes da música brasileira, como Gilberto Gil e Jorge Ben Jor, e renderam turnês pelo Brasil, Europa e Estados Unidos. Ambos os álbuns figuram na lista dos cem melhores álbuns brasileiros de todos os tempos da revista Rolling Stone, em 13° e 18° lugar.<br><br> Foi eleito pela Associação de Críticos Musicais de São Paulo como o melhor grupo musical brasileiro de 1996. Com sua mistura original de gêneros musicais, é uma das bandas mais influentes da história brasileira.',
        imagem : 'https://s2-g1.glbimg.com/f8trgEqMUy2H4yIIeZIgDRqyx9k=/0x0:1160x774/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/m/J/9OlGG5S9mnOAtZy67hMw/zacao-zumbi.jpg'
    },

    artista9 : {
        nome : 'Pitty',
        arroba : '@pitty',
        Bio : 'Priscilla Novaes Leone, mais conhecida como Pitty (Salvador, 7 de outubro de 1977), é uma cantora, compositora, produtora, escritora, empresária, apresentadora e multi-instrumentista brasileira. Cantora desde os 17 anos de idade, Pitty iniciou sua carreira profissionalmente em 1997, atuando como baterista durante dois anos na banda de punk rock Shes; apesar de realizarem alguns shows, a banda não chegou a gravar nenhum álbum. Em 1998, integra a banda de hardcore punk Inkoma, dessa vez atuando como vocalista, onde gravou um álbum de estúdio, tornando-se bastante popular na cena underground da Bahia. Em 2002, Pitty recebeu um convite do músico e produtor Rafael Ramos, que tinha como intenção produzir seu primeiro álbum solo, vindo a aceitar o convite, assinando com a gravadora Deckdisc no mesmo ano, onde lançou em 2003 o seu primeiro single, "Máscara".<br><br> A canção ganhou alta rotação nas rádios, em 7 de maio de 2003 lança seu primeiro álbum de estúdio solo, Admirável Chip Novo, vendendo 250 mil cópias e tornando-se o disco de estilo rock, mais vendido de 2003 no país',
        imagem : 'https://s2-g1.glbimg.com/lgTmnnAA7kfbbghDzxnE7gZQIKg=/696x390/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/2/v/CB8QAhRKSww7VL9Hu1jA/pitty-abre.jpg'
    },

    artista10 : {
        nome : 'Cochá',
        arroba : '@concha',
        Bio : 'Em 2013 a banda gravou e lançou seu primeiro disco: CoChá – Corisco na Chapada. Gravado ao vivo, dentro do projeto Boca da Noite, totalmente independente. No ano de 2017 lançou o single “Sinta o Amor” que também já veio com videoclipe independente. Essa nova música de trabalho foi selecionada para intitular o mais novo trabalho da banda, seu primeiro DVD, também gravado ao vivo em Teresina com a participação especial do vocalista Rodrigo Picollo, da banda Mato Seco (São Paulo). Em 2018 foi lançado o DVD nas plataformas digitais e outras parcerias entre elas o novo clip com a produtora de Minas Gerais “FalaMemo Produções”, o Single se chama “VOU TE FALAR” e traz a participação especial de Ojan. Acompanhando nos shows de DADA YUTE. Em 2019 apresentou show com o rapper Rapadura em Parnaíba e o Reggae na Barra Evento, em Barra Grande.',
        imagem : 'https://i.scdn.co/image/ab6761610000e5eb208708710890c0ba5e18ce5a'
    },

    artista11 : {
        nome : 'Fronteiras Blues',
        arroba : '@fronteirasblues',
        Bio : 'A banda foi formada em 2013 com referências de grupos como Led Zeppelin, Barão vermelho, Elvis Presley, Queen, mas sempre mostrando que é possível ousar com um repertório próprio, o que resultou no primeiro disco “Entre o céu e o inferno”, lançado em outubro de 2015. Com temas fortes e que retratam sobre a vida e natureza do homem, a banda já inicia as composições de seu 2º disco.',
        imagem : 'https://piauihoje.com/migration/public_html/media/image_bank/2018/10/banda-fronteiras-blues.jpg'
    },

    artista12 : {
        nome : 'Original Flip',
        arroba : '@originalflip',
        Bio : 'Original Flip possui uma identidade muito característica em suas apresentações. A banda já possui dois CDs gravados, um DVD e participou de programas nacionais envolvendo música e cultura que transcende estilos musicais e demonstra a pluralidade de referências. Em seu primeiro CD, intitulado “Firula”, a banda criou uma mistura de rock e hip hop, com letras reflexivas. Logo após, foi lançado o CD “Falando com Silêncio e Poesia Rude”, levando mais uma vez a música piauiense para outro patamar.<br><br>Com a gravação do DVD “Usina Santana”, a banda ganhou notoriedade e referência com uma apresentação versátil. Se dedicando cada vez mais à carreira nacional, Original Flip recebeu um convite para gravar em São Paulo. Com uma mistura musical precisa, desenvoltura técnica e qualidade artística que definem bem o projeto, a banda se destaca por ser sempre autoral e de sonoridade bastante peculiar, assim como todo seu conceito musical.',
        imagem : 'https://www.pi.gov.br/wp-content/uploads/2019/11/Original-FLip-80-of-125.jpg'
    },

    artista13 : {
        nome : 'Tânia Nery',
        arroba : '@originalflip',
        Bio : 'Dona de uma voz inconfudível  e com boa presença de palco, Tânia Nery é baiana da cidade de Salvador, interprete desde 1998 com shows acústicos de mpb. A cantora já fez parte de varios eventos menomados no Piauí e vem desta vez performar no palco do Girassol.',
        imagem : 'https://piauihoje.com/uploads/imagens/55901885-10215756637622181-8140873539042410496-o-7ac82bbebb563dc7e82a49c9a808d4107bc15d14%7C1576777963.jpg'
    },

    artista14 : {
        nome : 'Validuaté',
        arroba : '@validuate',
        Bio : 'Validuaté é uma banda brasileira que surgiu em 2004, em Teresina.<br><br> Com a proposta de experimentação rítmica sobre o rock e outros ritmos, a banda apresenta sua própria mistura de elementos da música brasileira e mundial. Já dividiu palco com grandes nomes da música brasileira como Caetano Veloso, João Bosco, Bossacucanova, Fernanda Porto, Cachorro Grande, Nação Zumbi, Vanessa da Mata, Maria Gadu, Nando Reis, Paralamas do Sucesso. A Validuaté lançou dois álbuns, Pelos Pátios Partidos em Festa (2008) e Alegria Girar (2009) e se prepara para lançar seu primeiro DVD e CD ao vivo.',
        imagem : 'https://yt3.googleusercontent.com/wezFh_EcD4r839EVGd60OctFn1tgLFmLw-l4PwEtKuAqT-TqnCrtQ0z9WIhQQdCQdYdIftA2OEc=s900-c-k-c0x00ffffff-no-rj'
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
    cardBioArtista.classList.add('Saida')
    decoradorSpotLuz.classList.add('Saida')
    setTimeout(()=> {
        cardBioArtista.classList.remove('Saida')
        decoradorSpotLuz.classList.remove('Saida')

        cardBioArtista.classList.remove('Aberto')
        decoradorSpotLuz.classList.remove('Ativo')
    }, 1000)
})

