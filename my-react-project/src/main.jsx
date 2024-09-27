import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Basics from './Basics.jsx'// 1. BasicsLesson
import CardLesson from './CardLesson.jsx'// 2. Card component Lesson
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardLesson />
  </StrictMode>,
)
