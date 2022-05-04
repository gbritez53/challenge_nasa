import axios from 'axios'

export const getNasaPhotos = async (selectedRover, page, sol) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${sol}&page=${page}&api_key=${
    import.meta.env.VITE_API_KEY
  }`

  try {
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    console.error('Error fetching data: ', err)
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
    console.error('Error fetching data: ', err)
  }
}
