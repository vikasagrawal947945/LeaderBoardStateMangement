import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LeaderBoard from './LeaderBoard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LeaderBoard/>
  </StrictMode>,
)
