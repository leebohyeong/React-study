import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'
import Main from './components/Main'
import './App.css'

function App() {
  const getGreeting = (name) => `안녕, ${name}`;
  return (
    <main>
      <Header/>
      <Section/>
      <h2>Hellow React!</h2>
      <p>{getGreeting('Alice')}</p>
      <Main/>
      <Footer/>
    </main>
  )
}

export default App
