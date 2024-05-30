import { useState, useEffect } from "react"

export default function Pokedex() {

    const [id , setId] = useState(494)
    const [pokemon, setPokemon] = useState(null)

    const fecthData = async () => {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            const data = await response.json()
            setPokemon(data)
        }catch(error){
            console.error("Error: ", error)
        }
    }

    const nextPokemon = () =>(
        setId(id + 1)
    )

    const previousPokemon = () =>(
        setId(id - 1)
    )

    useEffect(() =>{
        fecthData()
    }, [id])    

    return(

        <div>
            { pokemon && (
                <div className="pokemon">
                    <section>
                        <h1>Pokemon</h1>
                        <p>{pokemon.id}</p>
                        <p>{pokemon.name}</p>
                        <p>Peso: {pokemon.weight}</p>
                        <img src={pokemon.sprites.front_default} alt="" />

                        <div>
                            <button onClick={previousPokemon}>Anterior</button>
                            <button onClick={nextPokemon}>Próximo</button>
                        </div>
                    </section>
                </div>
            )

            }
        </div>
       
    )
}