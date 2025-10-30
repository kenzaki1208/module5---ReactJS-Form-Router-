import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import AppExercise1 from '../app/AppExercise1'

createRoot(document.getElementById('rootE1')).render(
    <StrictMode>
        <AppExercise1 />
    </StrictMode>,
)