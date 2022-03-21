const botaoMenuMobile = document.querySelector('.hamburger-btn');
const menuNavegacaoMobile = document.querySelector('nav');
const botaoFechaMenu = document.querySelector('.fechar-btn')

botaoMenuMobile.addEventListener('click', () => {
    menuNavegacaoMobile.classList.add('mostra-menu-mobile');
})

botaoFechaMenu.addEventListener('click', () => {
    menuNavegacaoMobile.classList.remove('mostra-menu-mobile')
})