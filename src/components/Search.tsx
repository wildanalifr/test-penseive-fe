'use client'

import { fetchData, getPokemonsByUrl } from '@/lib/apiPokemon'
import { usePokemonStore } from '@/zustand/pokemon'
import { useState } from 'react'

export default function Search() {
  const { setAllPokemons } = usePokemonStore()
  const [searchData, setSearchData] = useState<string>('')

  const searchDataFunction = async () => {
    try {
      let response = null
      if (searchData === '') {
        response = await fetchData()
        setAllPokemons(response)
      } else {
        response = await getPokemonsByUrl(searchData)
        setAllPokemons([response])
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className="flex justify-between space-x-10 my-10 max-w-lg">
      <input
        type="text"
        placeholder="Type here"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        className="input input-bordered w-full"
      />
      <button className="btn" onClick={searchDataFunction}>
        Search
      </button>
    </div>
  )
}
