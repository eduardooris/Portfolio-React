import './Section1.css'
import logo from '../images/logo.png'

function Section1() {
    return(
        <section id="home">
            <div className="home-info">
                <h2>Olá, eu sou o Eduardo Oris</h2>
                <span className="home-position">Programador Front-End</span>
                <span className="home-resume">HTML | CSS | JavaScript e React JS</span>

                <button>
                    <a href="#contact">Contate-me</a>
                </button>
            </div>

            <div className="home-img">
                <img src={logo} alt="" />
            </div>
        </section>
    )
}

export default Section1