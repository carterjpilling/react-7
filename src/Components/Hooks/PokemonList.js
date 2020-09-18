import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonList = (props) => {
  const [pokemon, setPokemon] = useState([])
  //Only job of setPokemon is to change the value of pokemon/state. 
  /*
  componentDidMount(){
    axios.get('https://pokeapi.co/api/v2/pokemon').then(res=>{
      this.setState({
        pokemon: res.data.results
      })
    })
  }
  */

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon').then((res) => {
      setPokemon(res.data.results)
    })
  }, [])

  return <div>{JSON.stringify(pokemon)}</div>

}

export default PokemonList