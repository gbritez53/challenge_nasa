import { useState, useEffect } from 'react'
import { useNasaContext } from '../context/NasaContext'
import { optionsRovers, customStyles, styles } from '../constants'
import { getNasaPhotos, getNasaManifest } from '../service/fetchNasaData'

import Select from 'react-select'
import CardList from './CardList'

const SelectInfo = () => {
  const {
    data,
    setData,
    setLoading,
    marsPhotos,
    selectedRover,
    setSelectedRover,
    manifest,
    setManifest,
    camera,
    setCamera,
    setFilteredCamera,
    page,
    setPage,
    sol,
    setSol,
    earthDay,
    setEarthDay
  } = useNasaContext()

  const [error, setError] = useState(null)
  const [arr, setArr] = useState([])

  useEffect(() => {
    setFilteredCamera(arr)
  }, [arr])

  useEffect(() => {
    Promise.allSettled([getNasaManifest(selectedRover)]).then(data => {
      const [
        {
          value: { photo_manifest: manifest }
        }
      ] = data
      setManifest(manifest)
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
      const { photos } = await getNasaPhotos(selectedRover, page, sol, earthDay)
      setData(photos)
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
    getPhotos()
    setLoading(true)
  }

  const optionsCameras = camera?.map(cam => ({
    value: cam.toLowerCase(),
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
            <label className={styles.labelTextSol}>Sol:</label>
            <input
              type='number'
              className={styles.inputSol}
              value={sol}
              onChange={e => setSol(e.target.value)}
              min='1'
              max={manifest.max_sol}
            />
          </div>
          <div className='flex'>
            <label className={styles.labelTextDay}>Earth Day:</label>
            <input
              type='date'
              className={styles.inputSol}
              value={earthDay}
              onChange={e => setEarthDay(e.target.value)}
            />
          </div>

          <input
            type='submit'
            value='Search Photos'
            className={styles.btnSubmit}
          />
        </div>

        <div className={styles.column_2}>
          <CardList />
        </div>
      </form>
      {error && (
        <div className='text-[#f3a6a6]'>{`There is a problem fetching the post data - ${error}`}</div>
      )}
    </>
  )
}

export default SelectInfo
