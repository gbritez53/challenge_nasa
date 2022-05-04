import { useState, useEffect } from 'react'
import Select from 'react-select'
import { optionsRovers, customStyles, styles } from '../constants'
import { getNasaPhotos, getNasaManifest } from '../service/fetchNasaData'

const SelectRover = () => {
  const [marsPhotos, setMarsPhotos] = useState([])
  const [selectedRover, setSelectedRover] = useState('curiosity')
  const [manifest, setManifest] = useState({})
  const [camera, setCamera] = useState([])
  const [filteredCamera, setFilteredCamera] = useState([])
  const [page, setPage] = useState(1)
  const [sol, setSol] = useState(1)
  const [arrx, setArr] = useState({})

  useEffect(() => {
    setFilteredCamera(arrx)
  }, [arrx])

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

  const handleSubmit = e => {
    e.preventDefault()
    getNasaManifest(selectedRover)
    getNasaPhotos(selectedRover, page, sol)
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
            name='j'
            className={styles.btnSubmit}
          />
        </div>
        <div className={styles.column_2}>
          <h2 className={styles.contentTitle}>Nothing here...</h2>
        </div>
      </form>
    </>
  )
}

export default SelectRover
