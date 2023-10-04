import { Pokemon } from "../types/types";

export async function fetchPokemons(): Promise<Pokemon[]> {
    const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=152"
    )
    if (!response.ok) {
        throw new Error("Failed to fetch pokemons")
    }

    const result = await response.json()
    console.log(result)
    const pokemons : Pokemon[] = result.results.map((pokemon: Pokemon, index: number) => ({
        id: index + 1,
        name: pokemon.name,
        imgSrc: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
    }))
    return pokemons
}