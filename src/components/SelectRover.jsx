import { useState, useEffect } from 'react'
import Select from 'react-select'
import { optionsRovers, customStyles } from '../constants'
import { getNasaPhotos } from '../service/getNasaPhotos'

const styles = {
  formContainer: `grid grid-cols-1 lg:grid-cols-4 gap-10`,
  selectContainer: `bg-zinc-800 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer border-b-2 border-purple-700 w-full `,
  labelText: `text-2xl italic font-semibold`,
  btnSubmit: `bg-[#7e22ced1] text-white py-2 px-4 rounded cursor-pointer hover:bg-purple-600/95 w-full`,
  column_1: `space-y-8`,
  column_2: `col-span-3`,
  contentTitle: `text-2xl italic`,
  inputSol: `bg-transparent border-b border-white w-full focus:outline-none text-center text-xl`
}

const SelectRover = () => {
  // useEffect(() => {
  //   getNasaPhotos(selectedRover, page, sol)
  // }, [selectedRover, page, sol])
  const [marsPhotos, setMarsPhotos] = useState([])
  const [selectedRover, setSelectedRover] = useState('')
  const [camera, setCamera] = useState([])
  const [filteredCamera, setFilteredCamera] = useState([])
  const [page, setPage] = useState(1)
  const [sol, setSol] = useState(1)

  const handleSubmit = e => {
    e.preventDefault()
    getNasaPhotos(selectedRover, page, sol)
    console.log(selectedRover)
  }

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
              options={optionsRovers}
              styles={customStyles}
            ></Select>
          </div>

          <div className='flex'>
            <label className={`mr-3 ${styles.labelText}`}>Sol:</label>
            <input
              type='number'
              className={styles.inputSol}
              value={sol}
              onChange={e => setSol(e.target.value)}
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
