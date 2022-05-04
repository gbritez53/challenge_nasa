import { useState, useEffect } from 'react'
import SelectRover from './SelectRover'
import { getNasaPhotos } from '../service/getNasaPhotos'

const Home = () => {
  const [marsPhotos, setMarsPhotos] = useState([])
  const [selectedRover, setSelectedRover] = useState('')
  const [camera, setCamera] = useState([])
  const [filteredCamera, setFilteredCamera] = useState([])
  const [page, setPage] = useState(1)
  const [sol, setSol] = useState(0)

  return (
    <>
      <h1 className='title-font'>Mars Rovers Photos</h1>
      <SelectRover
        selectedRover={selectedRover}
        setSelectedRover={setSelectedRover}
        page={page}
        setPage={setPage}
        sol={sol}
        setSol={setSol}
        camera={camera}
        setFilteredCamera={setFilteredCamera}
      />
    </>
  )
}

export default Home
