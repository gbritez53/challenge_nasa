import { useState, useEffect, createContext, useContext } from 'react'

const NasaContext = createContext()
export default NasaContext

export const NasaContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(null)

  const value = {
    loading,
    setLoading
  }

  return <NasaContext.Provider value={value}>{children}</NasaContext.Provider>
}

export const useNasaContext = () => {
  return useContext(NasaContext)
}
