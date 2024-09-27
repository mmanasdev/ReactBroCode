import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import Basics from './Basics.jsx'// 1. BasicsLesson
// import CardLesson from './CardLesson.jsx'// 2. Card component Lesson
// import StylesLesson from './StylesLesson'// 3. Add CSS styles to React components
// import PropsLesson from './PropsLesson'// 4. Props Lesson
// import ConditionalRenderingLesson from './ConditonalRenderingLesson'// 5. Conditional Rendering Lesson
import RenderListLesson from './RenderListLesson'// 6. Render List Lesson
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RenderListLesson />
  </StrictMode>,
)
