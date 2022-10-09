import './Section2.css'

function Section2() {
    return(
        <>
        <section id='contact'>
            <form>
                <h2>Contato</h2>
                <input type="text"
                placeholder='Digite seu nome'
                />
                <input type="email"
                placeholder='Digite seu email'
                />
                <textarea cols="30" rows="10"
                placeholder='Digite sua mensagem'></textarea>
                <button>Enviar</button>
            </form>
        </section>
        </>
    )
}

export default Section2