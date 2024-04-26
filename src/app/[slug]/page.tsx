'use client'
import { useEffect, useState } from 'react'
import { getPokemonsByUrl } from '@/lib/apiPokemon'
import Image from 'next/image'
import Pill from '@/components/Pill'
import Link from 'next/link'

export default function Page({ params }: { params: { slug: string } }) {
  const [pokemonData, setPokemonData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPokemonsByUrl(params.slug)
        setPokemonData(response)
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchData()
  }, [params.slug])

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <Link href={'/'} className="absolute top-6 right-6">
        Back
      </Link>
      <div>
        <Image
          src={pokemonData?.sprites?.back_default}
          alt="image"
          width={200}
          height={200}
          priority
        />
        <p className="text-center text-lg">
          {pokemonData?.name?.toUpperCase()}
        </p>
        <p className="text-base mt-3">
          Base Experience: {pokemonData?.base_experience}
        </p>
        <div className="flex space-x-2 mt-3">
          {pokemonData?.types?.map((item: any) => (
            <Pill
              key={item}
              pillName={item?.type?.name}
              classCss="bg-orange-300"
            />
          ))}
        </div>
        <p className="my-2">Height: {pokemonData?.height}</p>
        <p>Weight: {pokemonData?.weight}</p>
      </div>
    </div>
  )
}
