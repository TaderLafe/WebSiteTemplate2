const txtAnim = document.querySelector('h1')
const loader = document.querySelector('.loader')

window.addEventListener('load', () => {

    loader.classList.add('fondu-out')
})

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 20
})
.changeDelay(20)
.typeString("Moi c\'est Hysteryx")
.pauseFor(300)
.typeString("<strong>, Apprenti dev")
.pauseFor(1000)
.deleteChars(12)
.typeString('<span style="color: #27ae60"> Lua</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #88840B"> Python</span> !')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #ff6910"> JavaScipt</span> !')
.pauseFor(1000)
.deleteChars(38)
.pauseFor(1500)
.start()