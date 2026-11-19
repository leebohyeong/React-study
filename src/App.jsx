import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Nav from './components/Nav'
import Article from './components/Article'
import Aside from './components/Aside'

import './App.css'

function App() {
  return (
    <div className='wrap'>
      <div className="box">
        <Header/>
        <Nav/>
        <div className='content'>
          <Section/>
          <Article/>
          <Aside/>
        </div>
        <Footer/>
      </div>
      <div className="text">
        <h2>
          Semantic <br />
          Elements
        </h2>
      </div>
      
    </div>
  )
}

export default App
