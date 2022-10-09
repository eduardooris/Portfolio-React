import { useState } from 'react'
import './Section2.css'
import emailjs from '@emailjs/browser'

function Section2() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    function sendEmail(e) {
        e.preventDefault()
        if(name === '' || email === '' || message === '') {
           alert('Preencha todos os campos!!!')
           return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }


        emailjs.send("service_27i0k12", "template_gpkz76g", templateParams, "Uq3EAfhjDM8hKNGIu")
            .then((response) => {
                console.log("Email enviado", response.status, response.text)
                setEmail('')
                setMessage('')
                setName('')
            }, (err) => {console.log("Erro: ", err)})
    }

    return(
        <section id='contact'>
            <form onSubmit={sendEmail} >
                <h2>Contato</h2>
                <input type="text"
                placeholder='Digite seu nome'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <input type="email"
                placeholder='Digite seu email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <textarea cols="30" rows="10"
                placeholder='Digite sua mensagem'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <input className='button' type="submit" value="Enviar" />
            </form>
        </section>
    )
}

export default Section2