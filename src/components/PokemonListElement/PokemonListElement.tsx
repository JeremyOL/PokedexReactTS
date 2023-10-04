import styles from "./pokemonListElement.module.css"
import { Link } from "react-router-dom"

type PokemonListElementProps = {
    src: string
    name: string
    id: string
}

const PokemonListElement = ({src, name, id} : PokemonListElementProps) => {
    return (
        <Link key={id} className={styles.listItem} to={`/pokemon/${id}`}>
            <img className={styles.lisItemImage} src={src} alt={name} />
            <div className={styles.listItemText} >
                <span>{name}</span>
                <span>{`${id}`.padStart(3,'0')}</span>
            </div>
        </Link>
    )
}

export default PokemonListElement