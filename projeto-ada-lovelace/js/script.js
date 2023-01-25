document.getElementById("botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
    alert("Prontinho! Você receberá as novidades por e-mail.")
  }else{
    alert("Por favor, preencha os campos nome e email!")
  }
}



function criarLista(){

  // Conceito de array e objetos
  var listaDePersonalidades=[
    {nome: "Grace Hopper", link:"https://pt.wikipedia.org/wiki/Grace_Hopper"},
    {nome: "Dorothy Voughan", link:"https://pt.wikipedia.org/wiki/Dorothy_Vaughan"},
    {nome: "Margaret Hamilton", link:"https://pt.wikipedia.org/wiki/Margaret_Hamilton_(cientista_da_computa%C3%A7%C3%A3o)"},
    { nome:"Katherine Johnson", link: "https://pt.wikipedia.org/wiki/Katherine_Johnson"},
  ]

  // seletores
  const minhaLista = document.querySelector("#listaPersonalidades")

  // laço de repetição
  for(var i =0 ; i < listaDePersonalidades.length; i++){
    // Acessar item de um array
    var item = listaDePersonalidades[i];

    // Criação de elemento anchor com JS
    var a = document.createElement('a');
    var linkText = document.createTextNode(item.nome);
    a.appendChild(linkText);
    a.title = item.nome; // cria a tooltip
    a.href = item.link;
    a.target ='_blanck'

    // Criar item da lista
    const ul = document.createElement("ul");

    // Adicionar o anchor como filho do item da lista
    ul.appendChild(a);

    // adicionar o item da lista à lista
    minhaLista.appendChild(ul)

  }

}

// --- Outra forma de fazer esse código

// Conceito de entrada
function criarItemDeLista(titulo, link){
  var a = document.createElement('a');
  var linkText = document.createTextNode(titulo);
  a.appendChild(linkText);
  a.title = titulo.nome; // cria a tooltip
  a.href = link.link;

  // Conceito de saida
  return a

}

function criarListaDois(){

  // Conceito de array e objetos
  var listaDePersonalidades=[
    {nome: "Grace Hopper", link:"https://pt.wikipedia.org/wiki/Grace_Hopper"},
    {nome: "Dorothy Voughan", link:"https://pt.wikipedia.org/wiki/Dorothy_Vaughan"},
    {nome: "Margaret Hamilton", link:"https://pt.wikipedia.org/wiki/Margaret_Hamilton_(cientista_da_computa%C3%A7%C3%A3o)"},
    { nome:"Katherine Johnson", link: "https://pt.wikipedia.org/wiki/Katherine_Johnson"},
  ]

  // seletores
  const minhaLista = document.querySelector("#listaPersonalidades")

  // laço de repetição
  for(var i =0 ; i < listaDePersonalidades.length; i++){
    // Acessar item de um array
    var item = listaDePersonalidades[i];

   // Utilizando metodo para criar o elemento anchor
    var a = criarItemDeLista(item.nome, item.link)

    // Criar item da lista
    var ul = document.createElement("ul");

    // Adicionar o anchor como filho do item da lista
    ul.appendChild(a);

    // adicionar o item da lista à lista
    minhaLista.appendChild(ul)

  }

}

// Usar um ou outro
criarLista()
//criarListaDois()