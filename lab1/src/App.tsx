import { useState, useEffect, useMemo } from 'react'
import './App.css'
import Header from './components/Header/Header.tsx'
import PetFilter from './components/PetFilter/PetFilter.tsx'
import PetGallery from './components/PetGallery/PetGallery.tsx'
import type { Pet, PetFilter as PetFilterType } from './types/pet'

function App() {
  const [pets, setPets] = useState<Pet[]>([])
  const [currentFilter, setCurrentFilter] = useState<PetFilterType>('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPets = async () => {
      try {
        setLoading(true)
        const allPets: Pet[] = []
        const dogPromises = Array.from({ length: 6 }, async (_, index) => {
          const response = await fetch('https://dog.ceo/api/breeds/image/random')
          const data = await response.json()
          return {
            id: `dog-${index}`,
            name: "Тваринка " + (index + 1),
            species: 'dog' as const,
            age: Math.floor(Math.random() * 10) + 1,
            image: data.message,
            likes: Math.floor(Math.random() * 50),
          }
        })

        const catPromises = Array.from({ length: 6 }, async (_, index) => {
          const response = await fetch('https://api.thecatapi.com/v1/images/search')
          const data = await response.json()
          return {
            id: `cat-${index}`,
            name: "Тваринка " + (index + 1),
            species: 'cat' as const,
            age: Math.floor(Math.random() * 15) + 1,
            image: data[0].url,
            likes: Math.floor(Math.random() * 50),
          }
        })

        const dogs = await Promise.all(dogPromises)
        const cats = await Promise.all(catPromises)

        allPets.push(...dogs, ...cats)

        const shuffled = allPets.sort(() => Math.random() - 0.5)
        setPets(shuffled)
        setLoading(false)
      } catch (error) {
        console.error(error)
        setLoading(false)
      }
    }

    fetchPets()
  }, [])

  const filteredPets = useMemo(() => {
    if (currentFilter === 'all') {
      return pets
    }
    return pets.filter(pet => pet.species === currentFilter)
  }, [currentFilter, pets])

  const handleFilterChange = (filter: PetFilterType) => {
    setCurrentFilter(filter)
  }

  return (
    <>
      <Header />
      <PetFilter currentFilter={currentFilter} onFilterChange={handleFilterChange} />
      <PetGallery pets={filteredPets} loading={loading} />
    </>
  )
}

export default App
