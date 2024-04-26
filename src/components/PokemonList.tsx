'use client'
import { usePokemonStore } from '@/zustand/pokemon'
import Card from './Card'
import { fetchData } from '@/lib/apiPokemon'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PokemonList() {
  const { pokemons, setAllPokemons } = usePokemonStore()
  const [data, setData] = useState<any[]>()

  useEffect(() => {
    async function callApi() {
      const response = await fetchData()
      setAllPokemons(response)
    }

    callApi()
  }, [])

  useEffect(() => {
    setData(pokemons)
  }, [pokemons])

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {data &&
          data?.map((item: any) => (
            <Link key={item?.name} href={`/${item?.name}`}>
              <Card key={item?.name} item={item} />
            </Link>
          ))}
      </div>
    </>
  )
}
