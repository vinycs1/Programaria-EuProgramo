window.onload = function(){
    console.log('Onload disparado');
}

document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)


function criarItemDeGaleria(src){
  var myImage = document.createElement('img');
  myImage.src = src;

  return myImage

}

function criarGaleria(){

  // Conceito de array e objetos
  var pintores=[
    {nome: "Vincent Van Gogh", src: 'img/van-gogh.png'},

  ]

    console.log("HERE")

  // seletores
  const galeria = document.querySelector("#galeria-principal")

  // laço de repetição
  for(var i =0 ; i < pintores.length; i++){
    // Acessar item de um array
    var item = pintores[i];

   // Utilizando metodo para criar o elemento anchor
    var imagem = criarItemDeGaleria(item.src)

    // adicionar o item da lista à lista
    galeria.appendChild(imagem)

  }

}

criarGaleria()
console.log("asdas")