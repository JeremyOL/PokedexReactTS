import styles from "./pokemonListElement.module.css"
import { Link } from "react-router-dom"

type PokemonListElementProps = {
    src: string
    name: string
    number: string
}

const PokemonListElement = ({src, name, number} : PokemonListElementProps) => {
    return (
        <Link className={styles.listItem} to="/">
            <img className={styles.lisItemImage} src={src} alt={name} />
            <div className={styles.listItemText} >
                <span>{name}</span>
                <span>{number}</span>
            </div>
        </Link>
    )
}

export default PokemonListElement