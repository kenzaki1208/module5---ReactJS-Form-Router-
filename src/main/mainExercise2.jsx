import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import AppExercise2 from '../app/AppExercise2'

createRoot(document.getElementById('rootE2')).render(
    <StrictMode>
        <AppExercise2 />
    </StrictMode>,
)