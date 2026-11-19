import React from 'react'

const Section = () => {
    const name='Alice'
    const age=25
    const numbers =[1,2,3,4]
    const obj ={
        city:'seoul',
        hobby:'programing'
    }
  return (
    <section>
        <p>내 이름은 {name} 입니다.</p>
        <p>내 나이는 {age} 입니다.</p>
        <p>내 번호는 {numbers[2]} 입니다.</p>
        <p>내가 사는 지역은 {obj.city}이고 취미는 {obj.hobby} 입니다.</p>
    </section>
  )
}

export default Section