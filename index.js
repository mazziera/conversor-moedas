const botaoConverter = document.querySelector(".botao");

const seletorDeMoedasParaConverter = document.querySelector(".seletor-moedas-converter");

const seletorDeMoedasConvertidas = document.querySelector(".seletor-moedas-convertidas");


function converterMoeda(){

    const valorDigitadoPeloUsuario = document.querySelector(".input-valor").value;
    
    const dolar = 4.91;
    const euro = 5.36;
    let moedaAconverter = valorDigitadoPeloUsuario;
    const realComDolar = moedaAconverter * dolar;
    // const realComEuro = moedaAconverter * euro;


    const valoraConverter = document.querySelector(".campo-valor-converter");
    
    if(seletorDeMoedasParaConverter.value == "dolar"){
        valoraConverter.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(realComDolar);
        
     } // else if(seletorDeMoedasParaConverter.value == "euro"){
    //     valoraConverter.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(realComEuro);
    // }


    const valorConvertido = document.querySelector(".campo-valor-convertido");


    if(seletorDeMoedasConvertidas.value == "dolar"){
        valorConvertido.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(valorDigitadoPeloUsuario / dolar);

    } else if(seletorDeMoedasConvertidas.value == "euro"){
        valorConvertido.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(valorDigitadoPeloUsuario / euro);

    } else if (seletorDeMoedasConvertidas.value == "real"){
        valorConvertido.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(realComDolar);
    }


    valoraConverter.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorDigitadoPeloUsuario);
    
    
}

function mudarPaisMoedaConvertida(){
    const nomeMoedaConverter = document.querySelector(".campo-moeda-converter");
    const imagemPaisConverter = document.querySelector(".imagem-pais-converter");

    if(seletorDeMoedasParaConverter.value == "dolar"){
        nomeMoedaConverter.innerHTML = "USD";
        imagemPaisConverter.src = "./src/imagens/logo-dolar.png";
    }


    const nomeMoedaConvertida = document.querySelector(".campo-moeda-convertida");
    const imagemPaisConvertido = document.querySelector(".imagem-pais-convertido");


    if(seletorDeMoedasConvertidas.value == "dolar"){
        nomeMoedaConvertida.innerHTML = "USD";
        imagemPaisConvertido.src = "./src/imagens/logo-dolar.png";

    } else if(seletorDeMoedasConvertidas.value == "euro"){
        nomeMoedaConvertida.innerHTML = "EUR";
        imagemPaisConvertido.src = "./src/imagens/logo-euro.png";

    } else if ( seletorDeMoedasConvertidas.value == "real"){
        nomeMoedaConvertida.innerHTML = "BRL";
        imagemPaisConvertido.src = "./src/imagens/logo-brl.png";

    }

    converterMoeda();
}


seletorDeMoedasConvertidas.addEventListener("change", mudarPaisMoedaConvertida);
botaoConverter.addEventListener("click", converterMoeda);

