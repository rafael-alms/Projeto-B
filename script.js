onload = () => {
    setTimeout(function(){ 
        escondeComp1();
    }, 12000);

    setTimeout(function(){ 
       typewriter();
    }, 12000);
};
  
escondeComp1 = () => {
    document.getElementById("componente1").style.display = 'none';
    document.getElementById("componente2").style.display = 'block';
};

escondeComp2 = () => {
    document.getElementById("componente2").style.display = 'none';
    document.getElementById("componente3").style.display = 'block';
};

// set up text to print, each item in array is new line
var aText = new Array(
    "VOCÊ", 
    "FOI",
    "ESCOLHIDO!"
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row

typewriter = () => {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
};

var numPergunta = 1;
var acertos = 0;

mudaCorBranco = (resposta) => {
    document.getElementById(resposta).style.backgroundColor = "#F9F9F9";
    document.getElementById(resposta).style.borderBottomColor = "#C7C7C7";
    document.getElementById(resposta).style.borderRightColor = "#C7C7C7";
    document.getElementById(resposta).style.color = "#000";
};

mudaCorVermelho = (resposta) => {
    document.getElementById(resposta).style.backgroundColor = "#E71125";
    document.getElementById(resposta).style.borderBottomColor = "#9B111E";
    document.getElementById(resposta).style.borderRightColor = "#9B111E";
    document.getElementById(resposta).style.color = "#FFF";
};

mudaCorVerde = (resposta) => {
    document.getElementById(resposta).style.backgroundColor = "#1f9238";
    document.getElementById(resposta).style.borderBottomColor = "#0d7016";
    document.getElementById(resposta).style.borderRightColor = "#0d7016";
    document.getElementById(resposta).style.color = "#FFF";
};

trocaPergunta = (resposta) => {
    document.getElementById("perguntaExibida").animate([
        // keyframes
        { opacity: '1', transform: 'translateX(0)' },
        { opacity: '0', transform: 'translateX(15px)' }
      ], {
        // timing options
        duration: 1000,
        fill: "forwards"
      });

    document.getElementById("perguntas").animate([
        // keyframes
        { opacity: '1' },
        { opacity: '0' }
      ], {
        // timing options
        duration: 1000,
        fill: "forwards"
      });

    setTimeout(function(){ 
        if(numPergunta === 2) {
            document.getElementById("perguntaExibida").innerHTML = "2) Qual a carreira mais recente do seu amigo Rafael?";
            document.getElementById("op1").innerHTML = "Tiktoker";
            document.getElementById("op2").innerHTML = "Lutador de Sumô";
            document.getElementById("op3").innerHTML = "Astronauta";
            document.getElementById("op4").innerHTML = "Gamer Pro";
        }
        else if(numPergunta === 3) {
            document.getElementById("perguntaExibida").innerHTML = "3) Qual o @ do Tik Tok do seu amigo Rafael?";
            document.getElementById("op1").innerHTML = "rafaeldealmeida";
            document.getElementById("op2").innerHTML = "mrbeast";
            document.getElementById("op3").innerHTML = "rafael-alms";
            document.getElementById("op4").innerHTML = "rafaalmeid";
        }
        else if(numPergunta === 4) {
            document.getElementById("perguntaExibida").innerHTML = "4) Junho é o mês de qual festividade?";
            document.getElementById("op1").innerHTML = "Carnaval";
            document.getElementById("op2").innerHTML = "Setembro amarelo";
            document.getElementById("op3").innerHTML = "Halloween";
            document.getElementById("op4").innerHTML = "Festa junina";
        }
        else if(numPergunta === 5) {
            document.getElementById("perguntaExibida").innerHTML = "5) O que mais comemoramos em junho?";
            document.getElementById("op1").innerHTML = "Dia dos pais";
            document.getElementById("op2").innerHTML = "Dia das crianças";
            document.getElementById("op3").innerHTML = "Aniversário do Rômulo";
            document.getElementById("op4").innerHTML = "Aniversário do Rafael";
        }
        else if(numPergunta === 6) {
            document.getElementById("perguntaExibida").innerHTML = "6) Qual das seguintes características representa mais o seu amigo Rafael?";
            document.getElementById("op1").innerHTML = "Falador";
            document.getElementById("op2").innerHTML = "Indeciso";
            document.getElementById("op3").innerHTML = "Cantor";
            document.getElementById("op4").innerHTML = "Agressivo";
        }
        else if(numPergunta === 7) {
            document.getElementById("perguntaExibida").innerHTML = "7) Qual das seguintes skins seu amigo Rafael nunca foi visto usando?";
            document.getElementById("op1").innerHTML = "Taekwondista";
            document.getElementById("op2").innerHTML = "Nadador";
            document.getElementById("op3").innerHTML = "Fitness";
            document.getElementById("op4").innerHTML = "Emo";
        }
        else if(numPergunta === 8) {
            document.getElementById("perguntaExibida").innerHTML = "8) Qual o poder preferido do seu amigo Rafael?";
            document.getElementById("op1").innerHTML = "Raio";
            document.getElementById("op2").innerHTML = "Magnetismo";
            document.getElementById("op3").innerHTML = "Vento";
            document.getElementById("op4").innerHTML = "Força";
        }
        else if(numPergunta === 9) {
            document.getElementById("perguntaExibida").innerHTML = "9) Escolha a melhor definição para a palavra “amigo”.";
            document.getElementById("op1").innerHTML = "Uma pessoa bonita.";
            document.getElementById("op2").innerHTML = "Uma pessoa solidária.";
            document.getElementById("op3").innerHTML = "Uma pessoa forte.";
            document.getElementById("op4").innerHTML = "“kkkkkkk é foda.”";      
        }
        else if (numPergunta === 10){
            document.getElementById("perguntaExibida").innerHTML = "10) Sobre o que foi a primeira pergunta desse quiz?";
            document.getElementById("op1").innerHTML = "Festividade de junho";
            document.getElementById("op2").innerHTML = "Carreira";
            document.getElementById("op3").innerHTML = "Melhor companhia";
            document.getElementById("op4").innerHTML = "@ do Tik Tok";
        }

        mudaCorBranco(resposta);

        document.getElementById("perguntaExibida").animate([
            // keyframes
            { opacity: '0', transform: 'translateX(-15px)' },
            { opacity: '1', transform: 'translateX(0)' }
          ], {
            // timing options
            duration: 1000,
            fill: "forwards"
          });
    
        document.getElementById("perguntas").animate([
            // keyframes
            { opacity: '0' },
            { opacity: '1' }
          ], {
            // timing options
            duration: 1000,
            fill: "forwards"
          });
    }, 1000);
};
     
prox = (resposta) => {
    var idResposta = document.getElementById(resposta).id.toString();
    if (numPergunta === 1) {
        if (idResposta == "btn2") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 2) {
        if (idResposta == "btn1") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 3) {
        if (idResposta == "btn3") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 4) {
        if (idResposta == "btn4") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 5) {
        if (idResposta == "btn4") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 6) {
        if (idResposta == "btn2") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 7) {
        if (idResposta == "btn4") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 8) {
        if (idResposta == "btn1") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 9) {
        if (idResposta == "btn4") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);     
    }
    else if (numPergunta === 10) {
        if (idResposta == "btn3") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);

        if (acertos >= 6) {
            setTimeout(function(){ 
                document.getElementById("componente3").style.display = 'none';
                document.getElementById("componente4").style.display = 'block';
                document.getElementById("aprovado").innerHTML = "Nota: " + acertos + " / 10";
            }, 1000);
        }
        else {
            setTimeout(function(){ 
                document.getElementById("componente3").style.display = 'none';
                document.getElementById("componente5").style.display = 'block';
                document.getElementById("falhou").innerHTML = "Nota: " + acertos + " / 10";
            }, 1000);
        }
    }

    if (numPergunta < 10) {
        numPergunta++;
  
        setTimeout(function(){ 
            trocaPergunta(resposta);
        }, 1000);
    }
};    

    