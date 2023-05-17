const input = document.querySelector('.login_input')

const send = document.querySelector('.login_button')

const formulario = document.querySelector('.login-form')


input.addEventListener('input', ativar = ({target}) => {
    if ( target.value.length > 3){
        send.removeAttribute('disabled')
        return
    }
    send.setAttribute('disabled',' ')
}  )

const enviar = (event) =>{
    event.preventDefault()

    localStorage.setItem('player', input.value)
    window.location = './game.html'

}

formulario.addEventListener('submit',enviar)