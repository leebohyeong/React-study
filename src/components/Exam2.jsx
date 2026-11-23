import React , {useState} from 'react'

const Exam2 = () => {
  const [text,setText] = useState('hello');

  const onClickButton = () => {
    // setText('goodby');
    setText(text === 'hello' ? 'goodby' : 'hello');
  }
  

  return (
    <div>
      <p>{text}</p>
      <button onClick={onClickButton}>click</button>
    </div>
  )
}

export default Exam2