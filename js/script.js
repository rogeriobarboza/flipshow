    /*
    var img0 = new Image()
    img0.src = "/imgs/paginas/00-capa-front.jpg";
    console.log("Pre-carregamento 00-capa-front.jpg");
    console.log("");

    var img1 = new Image()
    img1.src = "/imgs/paginas/p1.jpg";
    console.log("Pre-carregamento p1.jpg");
    console.log("");

    var img2 = new Image()
    img2.src = "/imgs/paginas/p2.jpg";
    console.log("Pre-carregamento p2.jpg");
    console.log("");

    var img3 = new Image()
    img3.src = "/imgs/paginas/p3.jpg";
    console.log("Pre-carregamento p3.jpg");
    console.log("");

    var img4 = new Image()
    img4.src = "/imgs/paginas/p4.jpg";
    console.log("Pre-carregamento p4.jpg");
    console.log("");

    var img5 = new Image()
    img5.src = "/imgs/paginas/p5.jpg";
    console.log("Pre-carregamento p5.jpg");
    console.log("");

    var img6 = new Image()
    img6.src = "/imgs/paginas/p6.jpg";
    console.log("Pre-carregamento p6.jpg");
    console.log("");

    var img7 = new Image()
    img7.src = "/imgs/paginas/p7.jpg";
    console.log("Pre-carregamento p7.jpg");
    console.log("");

    var img8 = new Image()
    img8.src = "/imgs/paginas/p8.jpg";
    console.log("Pre-carregamento p8.jpg");
    console.log("");

    var img9 = new Image()
    img9.src = "/imgs/paginas/p9.jpg";
    console.log("Pre-carregamento p.jpg");
    console.log("");
    */
    


console.log("Informações do array");
var flipArray = document.getElementsByClassName("flip"); // ARRAY LIKE, HTMLCollection

var flipArraySize = flipArray.length; // Pega o tamanho do array contando a partir da posição "0" ("0" que conta-se como "1") até a ultima posição
console.log("-> Tamanho/contagem do array = "+flipArraySize);

// PEGAR VALOR DE ATRIBUTO CSS (valores computados)

    // EXEMPLO: pegar valor de z-index de uma posição
        // Defina uma posição no array
        var primeiroElemento = flipArray[0];
        // Obtenha as propriedades de estilo computado da posição/elemento (primeiroElemento, nesse estudo de caso)
        const estiloComputado = window.getComputedStyle(primeiroElemento);
        // Obtenha o valor de 'z-index' do estilo computado
        const zIndexPrimeiroElemento = estiloComputado.getPropertyValue('z-index');
        console.log("-> z-index do Primeiro elemento = "+zIndexPrimeiroElemento);
        console.log("");

// z-index - auxiliar
var bz = 1; // anterior
var mz = 2; // principal
var nz = 1; // proximo

// POSIÇÕES no indice - Auxiliares console.log
var preFlipLog = 0; // anterior
var flipLog = 0; // principal
var proxFlipLog = 0; // proximo

// Auxiliar
var start = 0;
var end = 0;
var i = 0; // Contador

// Configurações iniciais
console.log("Configurações iniciais");

// Define posição/flip inicial
var flip = 0;

// Tras a 1ª imagem para frente (1ª posição no indice)  
flipArray[flip].style.zIndex = mz; 

console.log("-> Posição/Flip inicial = "+flip)
console.log("-> z-index/ordem inicial = "+mz);
console.log("-----//-----");

// Variável de controle para verificar se o botão já foi clicado recentemente
var clickMonitor = false;

// Função a ser executada quando o botão é clicado
function nextBtn(){
    console.log("==//==");
    
    // Verifica se o botão já foi clicado recentemente
    if (!clickMonitor) {
        // Define o botão como clicado recentemente
        clickMonitor = true;

        // Executa a função desejada (aqui apenas um log no console)
        console.log("Função nextBtn() executada!");
        next()

        // Aguarda 1 segundo antes de permitir clicar novamente
        setTimeout(function() {
            clickMonitor = false;
        }, 600); // 1000 milissegundos = 1 segundo
    }
}

function backBtn(){
    console.log("==//==");
    
    // Verifica se o botão já foi clicado recentemente
    if (!clickMonitor) {
        // Define o botão como clicado recentemente
        clickMonitor = true;

        // Executa a função desejada (aqui apenas um log no console)
        console.log("Função backBtn() executada!");
        back()

        // Aguarda 1 segundo antes de permitir clicar novamente
        setTimeout(function() {
            clickMonitor = false;
        }, 600); // 1000 milissegundos = 1 segundo
    }
}

function autoplay(){

    var flipContainer = document.getElementById("flipContainer");
    flipContainer.style.opacity=".01"
    Array.prototype.forEach.call(flipArray, function(flip, indice) {
        console.log('Índice ' + indice + ': ' + flip);
        next();
        setTimeout(function() {
            back();
        }, 1100);
    });
    setTimeout(function() {
        flipContainer.style.opacity="1"
    }, 1800);
}

autoplay();

// ======== NEXT FUNCTION ==================================================================================================== //

function next(){

// Define z-index "0" para todas as posições menos a posição principal
let zr = flipArraySize;

    for(i=flip; i<flipArraySize; i++){ // anotação: && i>0 && i<=flip.length
            
            flipArray[i].style.zIndex = zr--;
            console.log("Loop - Posição "+i+" recebeu z-index = "+zr);
            
    }

// Define a posição principal

    if (start==1 && flip<flipArraySize-1) { // Limita o incremento para não eceder o array
        ++flip; // AVANÇA para o proximo Flip
        flipLog = flip;
        console.log("Botão Next: FLIP = "+flipLog);
    } else {
        flipLog = flip;
        console.log("Botão Next: FLIP = "+flipLog);
    }
  

    if (flip<=flipArraySize-1) { // Previne eceder o array alem do seu tamanho

        flipArray[flip].style.transform = "rotateY(-180deg)"; // Aplica o flip/virada de pagina com mudança de grau em cada pagina 
    }

    setTimeout(function() {
        
            for (i=0; i<=flip; i++) {

                flipArray[i].style.zIndex = i;
                console.log("Loop Next time - Posição "+i+" recebeu z-index = "+i);              
            }

    }, 550);
    



    if (start==0){
        start = 1;
        end = 0;
    } 

    
    
} // FIM FUNCTION NEXT


// ======= BACK FUNCTION ================================================================================================================= //

function back() {
    
    let zl = -1;

 // Define a posição principal

    if (end==1 && flip>0) { // Limita o incremento para não eceder o array
        --flip; // AVANÇA para o proximo Flip
        
        flipLog = flip;
        console.log("Botão Back: FLIP = "+flipLog);
    } else {
        flipLog = flip;
        console.log("Botão Back: FLIP = "+flipLog);
    }
    

    if (flip>=0) { // Previne eceder o array em menos de 0

            flipArray[flip].style.transform = "rotateY(0deg)"; // Aplica o flip/virada de pagina com mudança de grau em cada pagina

    }

    setTimeout(function() {  

        for(i=flipArraySize-1; i>=flip; i--){
            flipArray[i].style.zIndex = zl++;
            console.log("Loop Back Time - Posição "+i+" recebeu z-index = "+zl);
        }

            //zl = (flipArraySize-1)-flip;
            //flipArray[flip].style.zIndex = zl;
            //console.log("Loop Time - Posição "+flip+" recebeu z-index = "+zl);

    }, 600);


    if (end==0){
        end = 1;
        start = 0;
    } 

    //console.log("==//==");
    
} // FIM FUNCTION BACK