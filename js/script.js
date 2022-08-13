const links = document.querySelectorAll('.header-menu a')

function ativarLink(link){ //pega o url e o caminho do href
  const url = location.href
  const href = link.href

  if(url.includes(href)){ //verifica se a url inclui o que está no href
    link.classList.add("ativo") // adciona classe nos
  }
}

links.forEach(ativarLink)