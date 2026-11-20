import React from 'react'

const Main = ({content="내용이 없습니다.", bgColor}) => {
  return (
    <div style={{backgroundColor:bgColor}}>
        {content},{bgColor}
    </div>
  )
}

export default Main