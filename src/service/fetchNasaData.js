import axios from 'axios'

export const getNasaPhotos = async (selectedRover, page, sol, earth_day) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?earth_day=${earth_day}&sol=${sol}&page=${page}&api_key=${
    import.meta.env.VITE_API_KEY
  }`
  try {
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error('Error fetching data: ', err.message)
  }
}

export const getNasaManifest = async rover => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}/?api_key=${
    import.meta.env.VITE_API_KEY
  }`

  try {
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error('Error fetching data: ', err.message)
  }
}
