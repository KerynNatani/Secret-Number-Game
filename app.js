//let titulo = document.querySelector('h1');
//titulo.innerHTML= 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML= 'Escolha um número entre 1 e 10:';

// O paragrafo de cima pode ser resumido com uma função, chamando um let e criando uma variavel que recebe o document.querySelector(tag)
/// onde tag pode ser h1 ou p 


let listaNumerosSorteados = [];
let limiteDaLista = 10;
let numeroSecreto = GerarNumeroAleatorio();
let tentativa = 1;
let teste;
mensagemInicial();

function ExibirTextoNaTela (tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML= texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

 function mensagemInicial(){
        ExibirTextoNaTela('h1','Jogo do Número Secreto');
        ExibirTextoNaTela('p','Escolha um número entre 1 e 10:');
    }



function verificarChute () {
    let chute = document.querySelector('input').value;

        if(chute == numeroSecreto){
            ExibirTextoNaTela('h1','Acertou!');
            let palavraTentativa = tentativa > 1 ? 'tentativas': 'tentativa';
            let mensagemTentativa = `Você acertou com ${tentativa} ${palavraTentativa}.`;
            ExibirTextoNaTela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');

        }
        else{ 
            if(chute > numeroSecreto){
                ExibirTextoNaTela('p','O número secretro é menor que o chute');
            }
            else{
                ExibirTextoNaTela('p','O número secreto é maior que o chute');
            }
            tentativa ++;
            limparCampo();
        }
}

function GerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random ()*limiteDaLista+ 1);
   let quantidadeElementosLista = listaNumerosSorteados.length;
   if (quantidadeElementosLista == limiteDaLista){
    listaNumerosSorteados = []
   }

   if (listaNumerosSorteados.includes(numeroEscolhido)){
        return GerarNumeroAleatorio();
   }
   else {
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
   }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo(){
    numeroSecreto = GerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);

}