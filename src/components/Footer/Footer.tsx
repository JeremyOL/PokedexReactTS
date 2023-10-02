import { Link } from "react-router-dom"
import styles from "./footer.module.css"

import pokemonIcon from "./img/pokeball.png"
import itemIcon from "./img/potion.png"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/">
                <img src={pokemonIcon} alt="Go to pokemons" />
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="items">
                <img src={itemIcon} alt="Go to items" />
                Items
            </Link>
        </footer>
    )
}

export default Footer