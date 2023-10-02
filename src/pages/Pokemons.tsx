import { useState } from "react"
import {Header, Footer} from "../components/components"

const Pokemons = () => {
    const [query, setQuery] = useState("")

    return (
        <>
        <Header query={query} setQuery={setQuery}/>
        <main>
            POKEMONS
        </main>
        <Footer/>
        </>
    )
}

export default Pokemons