import { useState } from "react"
import Header from "../components/Header"

const Pokemons = () => {
    const [query, setQuery] = useState("")

    return (
        <>
        <Header query={query} setQuery={setQuery}/>
        <main>
            POKEMONS
        </main>
        <footer>FOOTER</footer>
        </>
    )
}

export default Pokemons