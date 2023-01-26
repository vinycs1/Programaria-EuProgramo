function criarItemDeGaleria(src){
  var myImage = document.createElement('img');
  myImage.setAttribute('src', src)

  return myImage

}

function criarQuebraDeLinha(){
  var myImage = document.createElement('br');
  return myImage
}

function numeroPar(numero){
  return numero % 2 === 0 ? true: false
}

function criarGaleria(){

  // Conceito de array e objetos
  var pintores=[
    {nome: "Vincent Van Gogh", src: 'img/van-gogh.jpg'},
    {nome: "Tarsila", src: 'img/tarsila.jpg'},
    {nome: "Frida", src: 'img/frida.jpg'},
    {nome: "DaVinci", src: 'img/davinci.jpg'},

  ]
  const galeria = document.querySelector("#galeria-principal")

  for(var i =0 ; i < pintores.length; i++){
    var item = pintores[i];
    var imagem = criarItemDeGaleria(item.src)

    if(numeroPar(i)){
      const quebraDelinha = criarQuebraDeLinha()
      galeria.appendChild(quebraDelinha)
    }

    galeria.appendChild(imagem)


  }

}

criarGaleria()
