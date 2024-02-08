const botaoConverter = document.querySelector(".botao");
const primeiroSeletorDeMoedas = document.querySelector(".seletor-moedas-converter");
const segundoSeletorDeMoedas = document.querySelector(".seletor-moedas-convertidas");


async function converterMoeda() {
    try {
        const valorDigitadoPeloUsuario = document.querySelector(".input-valor").value;

        const apiResponse = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,EUR-USD");

        //Converter a resposta da API em formato JSON
        const apiData = await apiResponse.json();

        // Verificar se a resposta da API foi bem-sucedida
        if (!apiData) {
            throw new Error(`Erro ao carregar dados da API: ${apiResponse.status} ${apiResponse.statusText}`);
        }

        const dolar = apiData.USDBRL.high;
        const euro = apiData.EURBRL.high;
        const euroParaDolar = apiData.EURUSD.high;

        const valorConvertido = document.querySelector(".campo-valor-convertido");
        const valorConverter = document.querySelector(".campo-valor-converter");

        if (valorDigitadoPeloUsuario === '') {
            throw new Error("Por favor, insira um valor.");

        }else if (primeiroSeletorDeMoedas.value == "real" && segundoSeletorDeMoedas.value == "dolar") {
            valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario / dolar);

            valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);


        } else if (primeiroSeletorDeMoedas.value == "dolar" && segundoSeletorDeMoedas.value == "real") {
            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario * dolar);

            valorConverter.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario);


        } else if (primeiroSeletorDeMoedas.value == "real" && segundoSeletorDeMoedas.value == "euro") {
            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario / euro);

            valorConverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);


        } else if (primeiroSeletorDeMoedas.value == "euro" && segundoSeletorDeMoedas.value == "real") {
            valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario * euro);

            valorConverter.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario);


        } else if (primeiroSeletorDeMoedas.value == "dolar" && segundoSeletorDeMoedas.value == "euro") {
            valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario / euroParaDolar);

            valorConverter.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario);


        } else if (primeiroSeletorDeMoedas.value == "euro" && segundoSeletorDeMoedas.value == "dolar") {
            valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario * euroParaDolar);

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

    }catch(error){
        alert(`Ocorreu um erro: ${error.message}`);
    
    }

}

function mudarPaisMoedaConverter() {
    const campoMoedaConverter = document.querySelector(".campo-moeda-converter");
    const imagemPaisEsquerda = document.querySelector(".imagem-pais-esquerda");

    if (primeiroSeletorDeMoedas.value == "dolar") {

        campoMoedaConverter.innerHTML = "USD";
        imagemPaisEsquerda.src = "./src/imagens/logo-dolar.png";

    } else if (primeiroSeletorDeMoedas.value == "euro") {

        campoMoedaConverter.innerHTML = "EUR";
        imagemPaisEsquerda.src = "./src/imagens/logo-euro.png";

    } else if (primeiroSeletorDeMoedas.value == "real") {

        campoMoedaConverter.innerHTML = "BRL";
        imagemPaisEsquerda.src = "./src/imagens/logo-brl.png";
    }

    converterMoeda();
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