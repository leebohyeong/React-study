import React from 'react'

const Exam1 = ({name, age}) => {
  return (
    <div>
      <span className='userName'>나는 {name} 입니다.</span>
      <span className='userAge'>내 나이는 {age} 입니다.</span>
    </div>
  )
}

export default Exam1