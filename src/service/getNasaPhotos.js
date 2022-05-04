export const getNasaPhotos = async (selectedRover, page, sol) => {
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectedRover}/photos?sol=${sol}&page=${page}&api_key=${
    import.meta.env.VITE_API_KEY
  }`

  try {
    const response = await fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
    console.log(url)
    return response
  } catch (err) {
    console.error(err)
  }
}
