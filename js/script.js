//Ativar menu
const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){ //pega o url e o caminho do href
  const url = location.href
  const href = link.href

  if(url.includes(href)){ //verifica se a url inclui o que está no href
    link.classList.add("ativo") // adciona classe nos
  }
}

links.forEach(ativarLink)

//Ativar itens do orçamento

const parametros = new URLSearchParams(location.search)// selecionou parametros do url e transformou em um array

function ativarProduto(parametro){//percorreu parametros do array e marcou o elemento com id do parametro
  const elemento = document.getElementById(parametro)
 if(elemento){
  elemento.checked = true
 }
}

parametros.forEach(ativarProduto)

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button')

function ativarPergunta(event){
  const pergunta = event.currentTarget
  const controls = pergunta.getAttribute('aria-controls')
  const resposta = document.getElementById(controls)

  resposta.classList.toggle('ativa')
  const ativa = resposta.classList.contains("ativa")
  pergunta.setAttribute("aria-expandend", "true")
  
}

function eventosPerguntas(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}

perguntas.forEach(eventosPerguntas)