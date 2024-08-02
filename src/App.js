import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './component/Header'
import { FeedbackProvider } from './context/FeedbackContext';
import FeedBackStat from './component/shared/FeedBackStat'
import FeedbackForm from "./component/FeedbackForm";
import FeedbackList from './component/FeedbackList'
import AboutIconLink from './component/AboutIconLink';
import AboutPage from './pages/AboutPage';
function App(){
    
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        <div className="container">
        <Routes>
        <Route exact path='/' element={
            <>
            <FeedbackForm />
            <FeedBackStat />
            <FeedbackList  />
            </>
        } />
        <Route path='/about' element={<AboutPage />}  />

        </Routes>
        <AboutIconLink />
        </div>
        
    </Router>
    </FeedbackProvider>
    )
    
}
export default App