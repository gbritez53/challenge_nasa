import { useEffect } from 'react'
import { useNasaContext } from '../context/NasaContext'
import Card from './Card'

const CardList = ({ marsPhotos, filteredCamera, sol, page }) => {
  const { loading, setLoading } = useNasaContext()

  useEffect(() => {
    marsPhotos && setLoading(false)
  }, [])

  return (
    <div>
      <h2 className='text-2xl italic'>Nothing here...</h2>
    </div>
  )
}

export default CardList
