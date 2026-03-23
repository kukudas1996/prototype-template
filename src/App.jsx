import V1 from './pages/v1'
import V2 from './pages/v2'

function App() {
  const path = window.location.pathname

  if (path.startsWith('/v2')) return <V2 />
  return <V1 />
}

export default App
