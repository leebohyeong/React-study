import React ,{useRef} from 'react'

const FocusInput = () => {
    const inputRef = useRef('');
    const focusEvent = () => {
        inputRef.current.focus();
    }


  return (
    <div>
        <input ref={inputRef} type="text" placeholder='버튼을 클릭하면 포커스됨' />
        <button type="button" onClick={focusEvent}>포커스 버튼</button>
    </div>
  )
}

export default FocusInput