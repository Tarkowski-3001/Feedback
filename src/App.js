import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from './components/pages/AboutPage'
import AboutIcon from './components/AboutIcon'
import {useState} from 'react'

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if (window.confirm("Sure you wanna delete? ")){
        setFeedback(feedback.filter((item) =>
        item.id !== id
      ))
    }   
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id= uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={
            <>
              <FeedbackForm handleAdd={addFeedback}/>
              <FeedbackStats feedback={feedback} />
              <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </>
          } />

          <Route path="/about" element={<AboutPage />} />
        </Routes>
        
        <AboutIcon />
      </div>      
    </Router>
   
  )
}

export default App