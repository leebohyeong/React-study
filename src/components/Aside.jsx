import React from 'react'

const Aside = () => {
  const links=[1,2,3,4,5,6]
    return (
    <aside>
        <h2>Link 모음</h2>
        <ul>
            {links.map((link) => (
              <li key={link}>
                <a href="#">link</a>
              </li>
            ))}
        </ul>
    </aside>
  )
}

export default Aside