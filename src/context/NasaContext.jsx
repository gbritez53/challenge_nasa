import { useState, createContext, useContext } from 'react'

const NasaContext = createContext()
export default NasaContext

export const NasaContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(null)
  const [data, setData] = useState([])
  const [selectedRover, setSelectedRover] = useState('curiosity')
  const [manifest, setManifest] = useState({})
  const [camera, setCamera] = useState([])
  const [filteredCamera, setFilteredCamera] = useState([])
  const [page, setPage] = useState(1)
  const [sol, setSol] = useState(1)
  const [earthDay, setEarthDay] = useState('2020-09-22')

  const value = {
    loading,
    setLoading,
    data,
    setData,
    selectedRover,
    setSelectedRover,
    manifest,
    setManifest,
    camera,
    setCamera,
    filteredCamera,
    setFilteredCamera,
    page,
    setPage,
    sol,
    setSol,
    earthDay,
    setEarthDay
  }

  return <NasaContext.Provider value={value}>{children}</NasaContext.Provider>
}

export const useNasaContext = () => {
  return useContext(NasaContext)
}
