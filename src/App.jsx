import { NasaContextProvider } from './context/NasaContext'
import Home from './components/Home'

function App () {
  return (
    <NasaContextProvider>
      <main className='min-h-screen py-12 px-12'>
        <Home />
      </main>
    </NasaContextProvider>
  )
}

export default App
