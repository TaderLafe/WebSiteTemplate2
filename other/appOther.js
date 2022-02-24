const txtAnim = document.querySelector('h1')

new Typewriter(txtAnim, {
    loop: false,
    deleteSpeed: 20
})
.changeDelay(20)
.typeString("Envoyer un message à :")
.pauseFor(300)
.changeDelay(100)
.typeString('<span style="color: #27ae60"> Hysteryx</span>')
.start()