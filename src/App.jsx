import Header from './components/Header'
import Footer from './components/Footer'
import Aside from './components/Aside'
import Main from './components/Main'

import './App.css'

function App() {
  return (
    <div className='wrap'>
      <Header/>
      <div className="content">
        <Aside/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default App
