import Style from './Header.module.css'

function Header() {
    return(
        <header className={Style.Header}>
            <div className={Style.logo}><a href="#">Oris</a></div>

            
            <div className={Style.menu}>
            <nav>
                <ul>
                    <li><a href="#home">Início</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}

export default Header