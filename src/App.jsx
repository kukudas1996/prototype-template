import V1 from './pages/v1'
import V2 from './pages/v2'
import V3 from './pages/v3'
import V4 from './pages/v4'

function App() {
  const path = window.location.pathname

  if (path.startsWith('/v4')) return <V4 />
  if (path.startsWith('/v3')) return <V3 />
  if (path.startsWith('/v2')) return <V2 />
  return <V1 />
}

export default App
