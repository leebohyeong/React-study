import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

import './App.css'

function App() {
  const users = {
    name: 'Alice',
    age: 21
  }

  return (
    <div>
      
      <Exam3 />
      {/* <Exam1 {...users}/> */}
      {/* <Exam2 /> */}
      
      
      <h1>hello react!</h1>
      <Counter />
    </div>
  )
}

export default App
