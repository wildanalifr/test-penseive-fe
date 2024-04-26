const POKEMON_API = 'https://pokeapi.co/api/v2/'

export async function getPokemons() {
  const response = await fetch(POKEMON_API + 'pokemon?limit=100offset=0')
  const data = response.json()
  return data
}

export async function getPokemonsByUrl(pokemonName: string) {
  const response = await fetch(POKEMON_API + `pokemon/${pokemonName}`)
  const data = response.json()
  return data
}

export async function fetchData() {
  try {
    const data = await getPokemons()

    const pokemonRequests = await Promise.all(
      data.results.map(async (item: any) => {
        const pokemonResponse = await getPokemonsByUrl(item?.name)
        return pokemonResponse
      })
    )

    return pokemonRequests
  } catch (error) {
    console.error('Error fetching Pokemon data:', error)
  }
}

export async function fetchFilters() {
  const response = await fetch('https://pokeapi.co/api/v2/type')
  const data = await response.json()
  return data
}
