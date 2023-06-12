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
    mudaCorBranco(resposta);

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
            document.getElementById("perguntaExibida").innerHTML = "2) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 2";
            document.getElementById("op2").innerHTML = "Legenda 2";
            document.getElementById("op3").innerHTML = "Legenda 2";
            document.getElementById("op4").innerHTML = "Legenda 2";
        }
        else if(numPergunta === 3) {
            document.getElementById("perguntaExibida").innerHTML = "3) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 3";
            document.getElementById("op2").innerHTML = "Legenda 3";
            document.getElementById("op3").innerHTML = "Legenda 3";
            document.getElementById("op4").innerHTML = "Legenda 3";
        }
        else if(numPergunta === 4) {
            document.getElementById("perguntaExibida").innerHTML = "4) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 4";
            document.getElementById("op2").innerHTML = "Legenda 4";
            document.getElementById("op3").innerHTML = "Legenda 4";
            document.getElementById("op4").innerHTML = "Legenda 4";
        }
        else if(numPergunta === 5) {
            document.getElementById("perguntaExibida").innerHTML = "5) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 5";
            document.getElementById("op2").innerHTML = "Legenda 5";
            document.getElementById("op3").innerHTML = "Legenda 5";
            document.getElementById("op4").innerHTML = "Legenda 5";
        }
        else if(numPergunta === 6) {
            document.getElementById("perguntaExibida").innerHTML = "6) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 6";
            document.getElementById("op2").innerHTML = "Legenda 6";
            document.getElementById("op3").innerHTML = "Legenda 6";
            document.getElementById("op4").innerHTML = "Legenda 6";
        }
        else if(numPergunta === 7) {
            document.getElementById("perguntaExibida").innerHTML = "7) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 7";
            document.getElementById("op2").innerHTML = "Legenda 7";
            document.getElementById("op3").innerHTML = "Legenda 7";
            document.getElementById("op4").innerHTML = "Legenda 7";
        }
        else if(numPergunta === 8) {
            document.getElementById("perguntaExibida").innerHTML = "8) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 8";
            document.getElementById("op2").innerHTML = "Legenda 8";
            document.getElementById("op3").innerHTML = "Legenda 8";
            document.getElementById("op4").innerHTML = "Legenda 8";
        }
        else if(numPergunta === 9) {
            document.getElementById("perguntaExibida").innerHTML = "9) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 9";
            document.getElementById("op2").innerHTML = "Legenda 9";
            document.getElementById("op3").innerHTML = "Legenda 9";
            document.getElementById("op4").innerHTML = "Legenda 9";      
        }
        else if (numPergunta === 10){
            document.getElementById("perguntaExibida").innerHTML = "10) Pergunta";
            document.getElementById("op1").innerHTML = "Legenda 10";
            document.getElementById("op2").innerHTML = "Legenda 10";
            document.getElementById("op3").innerHTML = "Legenda 10";
            document.getElementById("op4").innerHTML = "Legenda 10";
        }

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
        if (idResposta == "btn1") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 2) {
        if (idResposta == "btn2") {
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
        if (idResposta == "btn1") {
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
        if (idResposta == "btn3") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 8) {
        if (idResposta == "btn4") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);
    }
    else if (numPergunta === 9) {
        if (idResposta == "btn1") {
            acertos++;
            mudaCorVerde(resposta);
        }
        else
            mudaCorVermelho(resposta);     
    }
    else if (numPergunta === 10) {
        if (idResposta == "btn2") {
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

    