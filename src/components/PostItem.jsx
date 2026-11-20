import React from 'react'

const PostItem = ({title, author}) => {
  return (
    <div>
        {/* {title}-{author} */}
        <label onClick={()=>{console.log(title)}}>{title}</label>
    </div>
  )
}

export default PostItem