const anoAtual = new Date().getFullYear()
const paragrafoAnoCopyright = document.querySelector('footer .copyright')
paragrafoAnoCopyright.textContent = `Copyright © ${anoAtual} Frontend Bootcamp.`