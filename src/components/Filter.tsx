'use client'
import { fetchFilters } from '@/lib/apiPokemon'
import { usePokemonStore } from '@/zustand/pokemon'
import { useEffect, useState } from 'react'
import Pill from './Pill'

export default function Filter() {
  const { setFilterData, filtersData, pokemons, setAllPokemons } =
    usePokemonStore()

  const [chosenFilter, setChosenFilter] = useState<any>('')

  useEffect(() => {
    async function getFilters() {
      try {
        const response = await fetchFilters()
        setFilterData(response?.results)
      } catch (error) {
        console.log('error', error)
      }
    }

    getFilters()
  }, [])

  useEffect(() => {
    if (chosenFilter !== '') {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.types.some((type: any) => type.type.name === chosenFilter)
      )
      setAllPokemons(filteredPokemons)
    }
  }, [chosenFilter])

  const handlePillClick = (pillName: string) => {
    setChosenFilter(pillName)
  }

  return (
    <div className="flex flex-wrap gap-3">
      {filtersData &&
        filtersData.map((item: any) => (
          <Pill
            key={item.name}
            pillName={item.name}
            classCss="bg-orange-400"
            onClick={handlePillClick}
          />
        ))}
    </div>
  )
}
