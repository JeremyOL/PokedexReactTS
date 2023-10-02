import { useState } from "react"
import { Header, Footer, PokemonListElement } from "../components/components"

const mock = {
    bulbasaur: {
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        name: "Bulbasaur",
        number: "001"
    },
    ho_oh: {
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
        name: "Ho-oh",
        number: "250"
    },

}

const Pokemons = () => {
    const [query, setQuery] = useState("")

    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav>
                    <PokemonListElement src={mock.bulbasaur.src} name={mock.bulbasaur.name} number={mock.bulbasaur.number} />
                    <PokemonListElement src={mock.ho_oh.src} name={mock.ho_oh.name} number={mock.ho_oh.number} />
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default Pokemons