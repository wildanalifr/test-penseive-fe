'use client'
import Pill from '@/components/Pill'
import PokemonCard from '@/components/PokemonCard'
import { usePokemonStore } from '@/zustand/pokemon'
import Image from 'next/image'
import Link from 'next/link'

export default function ComparePage() {
  const { comparePokemons } = usePokemonStore()

  return (
    <div className="min-h-screen pt-28 ">
      <div className="ml-40">
        <Link href={'/'}>Back</Link>
      </div>
      <p className="mb-11 text-center text-xl">Compare your pokemon!</p>
      <div className="flex flex-wrap justify-center items-center">
        {comparePokemons.map((item) => (
          <PokemonCard key={item} item={item} />
        ))}
      </div>
    </div>
  )
}
