import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {
    //getState nos da el rootState
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() )

        //todo realizar peticion http
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        // const data = await resp.json()

        const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)

        // console.log(data)
        dispatch( setPokemons({pokemons: data.results,page: page + 1}) )
    }
}