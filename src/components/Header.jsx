import React from 'react'

const Header = () => {
    const isLoggedIn = false;

  return (
    <header>
        <h1>logo</h1>
        <p>
            {isLoggedIn ? <strong>hello</strong> : <strong>goodbye</strong>}
        </p>
    </header>
  )
}

export default Header