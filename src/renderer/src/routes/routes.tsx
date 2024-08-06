import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { ParseCSV } from './ParseCSV'
import { API } from './API'
import { Categories } from './Categories'
import { Languages } from './Languages'
import { Levels } from './Levels'
import { PrepareTopics } from './PrepareTopics'
import { PrepareLearning } from './PrepareLearning'
import { TopicsTypes } from './TopicsTypes'
import { UploadTopics } from './UploadTopics'
import { UploadLearning } from './UploadLearning'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <ParseCSV /> },
      { path: '/api', element: <API /> },
      { path: '/categories', element: <Categories /> },
      { path: '/languages', element: <Languages /> },
      { path: '/levels', element: <Levels /> },
      { path: '/parse-csv', element: <ParseCSV /> },
      { path: '/prepare-topics', element: <PrepareTopics /> },
      { path: '/prepare-learning', element: <PrepareLearning /> },
      { path: '/topic-types', element: <TopicsTypes /> },
      { path: '/upload-topics', element: <UploadTopics /> },
      { path: '/upload-learning', element: <UploadLearning /> }
    ]
  }
])

export default router
