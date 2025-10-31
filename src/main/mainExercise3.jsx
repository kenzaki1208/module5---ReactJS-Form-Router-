import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import AppExercise3 from '../app/AppExercise3'

createRoot(document.getElementById('rootE3')).render(
    <StrictMode>
        <AppExercise3 />
    </StrictMode>,
)