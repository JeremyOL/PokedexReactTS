import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="/">
                <img src={require("./img/pokeball.png")} alt="Go to pokemons" />
            </a>
            <a href="items">
                <img src={require("./img/potion.png")} alt="Go to items" />
            </a>
        </footer>
    )
}

export default Footer