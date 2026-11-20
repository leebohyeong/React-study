import React from 'react'

const Visual = ({sub, title}) => {

  const onClickButton = () => {
   //title이 console에 찍히게 만들기 
   console.log(title)
  }

  return (
    <section className='visual'>
      <p>{sub}</p>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={onClickButton}>메뉴 보러 가기</button>
    </section>
  )
}

export default Visual