import { useState, useEffect } from 'react'
import { useNasaContext } from '../context/NasaContext'
import { optionsRovers, customStyles, styles } from '../constants'
import { getNasaPhotos, getNasaManifest } from '../service/fetchNasaData'

import Select from 'react-select'
import Spinner from './Spinner'
import CardList from './CardList'

const SelectRover = () => {
  const { loading, setLoading } = useNasaContext()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [marsPhotos, setMarsPhotos] = useState([])
  const [selectedRover, setSelectedRover] = useState('curiosity')
  const [manifest, setManifest] = useState({})
  const [camera, setCamera] = useState([])
  const [filteredCamera, setFilteredCamera] = useState([])
  const [page, setPage] = useState(1)
  const [sol, setSol] = useState(1)

  const [arr, setArr] = useState({})

  useEffect(() => {
    setFilteredCamera(arr)
  }, [arr])

  useEffect(() => {
    Promise.allSettled([
      getNasaManifest(selectedRover),
      getNasaPhotos(selectedRover, page, sol)
    ]).then(data => {
      const [
        {
          value: { photo_manifest: manifest }
        },
        { value: photos }
      ] = data
      setManifest(manifest)
      setMarsPhotos(photos)
      if (manifest.photos?.length > 0) {
        const cameras = manifest?.photos.filter(photo => photo.sol === sol)
        if (cameras[0] !== undefined) {
          setCamera(cameras[0].cameras)
        }
      }
    })
  }, [selectedRover, page, sol])

  const getPhotos = async () => {
    try {
      const response = await getNasaPhotos(selectedRover, page, sol)
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        )
      }
      let actualData = await response.json()
      setData(actualData)
      setError(null)
    } catch (err) {
      setError(err.message)
      setData(null)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    getNasaManifest(selectedRover)
    getNasaPhotos(selectedRover, page, sol)
    setLoading(true)
    getPhotos()
  }

  const optionsCameras = camera?.map(cam => ({
    value: cam,
    label: cam
  }))

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.column_1}>
          <div>
            <label htmlFor='rovers' className={styles.labelText}>
              Select a Rover:
            </label>
            <Select
              options={optionsRovers}
              styles={customStyles}
              defaultValue={optionsRovers[0]}
              onChange={e => {
                setSelectedRover(e.value)
                setPage(1)
              }}
            />
          </div>

          <div>
            <label className={styles.labelText}>Select a Camera:</label>
            <Select
              className='filteredCamera'
              closeMenuOnSelect={false}
              isMulti
              options={optionsCameras}
              styles={customStyles}
              onChange={e => {
                setArr(e)
                setPage(1)
              }}
            ></Select>
          </div>

          <div className='flex'>
            <label className={`mr-3 ${styles.labelText}`}>Sol:</label>
            <input
              type='number'
              className={styles.inputSol}
              value={sol}
              onChange={e => setSol(e.target.value)}
              min='1'
              max={manifest.max_sol}
            />
          </div>

          <input
            type='submit'
            value='Search API'
            className={styles.btnSubmit}
          />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div className={styles.column_2}>
            <CardList
              marsPhotos={marsPhotos}
              filteredCamera={filteredCamera}
              page={page}
              sol={sol}
            />
          </div>
        )}
      </form>
    </>
  )
}

export default SelectRover
