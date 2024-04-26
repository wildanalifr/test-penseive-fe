'use client'
import { usePokemonStore } from '@/zustand/pokemon'
import Link from 'next/link'

export default function CompareNotiv() {
  const { comparePokemons, resetCompare } = usePokemonStore()

  return (
    <div
      className={`bg-blue-300 rounded-md ${
        comparePokemons.length > 0 ? 'fixed' : 'hidden'
      } bottom-0 right-0 z-10 `}
    >
      <div className="relative py-2 px-6">
        <div
          className="absolute top-1 right-1 hover:cursor-pointer"
          onClick={resetCompare}
        >
          <p>X</p>
        </div>
        <p>
          {comparePokemons.length}{' '}
          {comparePokemons.length > 1 ? 'items' : 'item'}
        </p>
        <Link
          href={'/compare'}
          className={`hover:underline ${
            comparePokemons.length === 1 ? 'btn-disabled' : ''
          }`}
        >
          Compare
        </Link>
      </div>
    </div>
  )
}
