import { useEffect, useState } from "react"
import { Header, Footer, PokemonListElement } from "../components/components"
import { Pokemon } from "../types/types"
import { fetchPokemons } from "../api/fetchPokemons"

const Pokemons = () => {
    const [query, setQuery] = useState("")
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {
        const fetchAllPokemons = async () => {
            const allPokemons = await fetchPokemons()
            setPokemons(allPokemons)
        }
        fetchAllPokemons()
    }, [])

    return (
        <>
            <Header query={query} setQuery={setQuery} />
            <main>
                <nav>
                    {pokemons?.map((pokemon:Pokemon) => (
                        <PokemonListElement key={pokemon.id} src={pokemon.imgSrc} name={pokemon.name} id={pokemon.id} />
                    ))}
                </nav>
            </main>
            <Footer />
        </>
    )
}

export default Pokemons