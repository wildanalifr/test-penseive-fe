import { create } from 'zustand'

interface PokemonState {
  pokemons: any[]
  computedPokemons: any[]
  comparePokemons: any[]
  filtersData: any[]
  isCompareMode: boolean

  setAllPokemons: (item: any) => void
  setComparePokemon: (item: any) => void
  switchCompare: () => void
  resetCompare: () => void
  setFilterData: (item: any) => void
}

export const usePokemonStore = create<PokemonState>((set, get) => ({
  pokemons: [],
  computedPokemons: [],
  comparePokemons: [],
  filtersData: [],
  isCompareMode: false,
  setAllPokemons: (item: any) => {
    set({ pokemons: item })
  },
  setComparePokemon: (item) => {
    set({ comparePokemons: [item, ...get().comparePokemons] })
  },
  switchCompare: () => {
    set({ isCompareMode: !get().isCompareMode })
  },
  resetCompare: () => {
    set({ comparePokemons: [] })
    set({ isCompareMode: false })
  },
  setFilterData: (item) => {
    set({ filtersData: item })
  },
}))
