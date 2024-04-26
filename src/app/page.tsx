import CompareSwitch from '@/components/CompareSwitch'
import CompareNotiv from '@/components/CompareNotiv'
import Search from '@/components/Search'
import PokemonList from '@/components/PokemonList'
import Filter from '@/components/Filter'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-10">
      <div className="flex justify-end">
        <CompareSwitch />
      </div>

      <Search />
      <div className="mb-4">
        <Filter />
      </div>
      <PokemonList />
      <CompareNotiv />
    </main>
  )
}
