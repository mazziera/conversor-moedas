const botaoConverter = document.querySelector(".botao");

const primeiroSeletorDeMoedas = document.querySelector(".seletor-moedas-converter");

const segundoSeletorDeMoedas = document.querySelector(".seletor-moedas-convertidas");

const valorDigitadoPeloUsuario = document.querySelector(".input-valor").value;

function converterMoeda() {
    

    const real = 1.00;
    const dolarEmReal = 4.93;
    const euroEmReal = 5.36;

    const dolarEmEuro = 1.09;
    const euroEmDolar = 0.92;


    const valorConvertido = document.querySelector(".campo-valor-convertido");
    const valorConverter = document.querySelector(".campo-valor-converter");


    if (primeiroSeletorDeMoedas.value == "real" && segundoSeletorDeMoedas.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario / dolarEmReal);

        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);


    } else if (primeiroSeletorDeMoedas.value == "dolar" && segundoSeletorDeMoedas.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario * dolarEmReal);

        valorConverter.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario);


    } else if (primeiroSeletorDeMoedas.value == "real" && segundoSeletorDeMoedas.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario / euroEmReal);

        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);


    } else if (primeiroSeletorDeMoedas.value == "euro" && segundoSeletorDeMoedas.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario * euroEmReal);

        valorConverter.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario);


    } else if (primeiroSeletorDeMoedas.value == "dolar" && segundoSeletorDeMoedas.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario / dolarEmEuro);

        valorConverter.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario);


    } else if (primeiroSeletorDeMoedas.value == "euro" && segundoSeletorDeMoedas.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario / euroEmDolar);

        valorConverter.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario);

    } else if (primeiroSeletorDeMoedas.value == "real" && segundoSeletorDeMoedas.value == "real") {
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);

        valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);


    } else if (primeiroSeletorDeMoedas.value == "dolar" && segundoSeletorDeMoedas.value == "dolar") {
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario);

        valorConverter.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario);

    } else if (primeiroSeletorDeMoedas.value == "euro" && segundoSeletorDeMoedas.value == "euro") {
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario);

        valorConverter.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario);
    }

}

function mudarPaisMoedaConverter(){
    const campoMoedaConverter = document.querySelector(".campo-moeda-converter");
    const imagemPaisEsquerda = document.querySelector(".imagem-pais-esquerda");

    if (primeiroSeletorDeMoedas.value == "dolar"){

        campoMoedaConverter.innerHTML = "USD";
        imagemPaisEsquerda.src = "./src/imagens/logo-dolar.png";

    } else if (primeiroSeletorDeMoedas.value == "euro"){

        campoMoedaConverter.innerHTML = "EUR";
        imagemPaisEsquerda.src = "./src/imagens/logo-euro.png";

    } else if (primeiroSeletorDeMoedas.value == "real"){

        campoMoedaConverter.innerHTML = "BRL";
        imagemPaisEsquerda.src = "./src/imagens/logo-brl.png";
    }

}

function mudarPaisMoedaConvertida() {
    const campoMoedaConvertida = document.querySelector(".campo-moeda-convertida");
    const imagemPaisDireita = document.querySelector(".imagem-pais-direita");

    if (segundoSeletorDeMoedas.value == "dolar") {

        campoMoedaConvertida.innerHTML = "USD";
        imagemPaisDireita.src = "./src/imagens/logo-dolar.png";


    } else if (segundoSeletorDeMoedas.value == "euro") {

        campoMoedaConvertida.innerHTML = "EUR";
        imagemPaisDireita.src = "./src/imagens/logo-euro.png"


    } else if (segundoSeletorDeMoedas.value == "real") {

        campoMoedaConvertida.innerHTML = "BRL";
        imagemPaisDireita.src = "./src/imagens/logo-brl.png";
    }

    converterMoeda();

}


primeiroSeletorDeMoedas.addEventListener("change", mudarPaisMoedaConverter)
segundoSeletorDeMoedas.addEventListener("change", mudarPaisMoedaConvertida);
botaoConverter.addEventListener("click", converterMoeda);