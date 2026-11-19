import React from 'react'

const Header = () => {
    const menus = [
        { id: 1, name: 'page' },
        { id: 2, name: 'page' },
        { id: 3, name: 'page' },
        { id: 4, name: 'page' },
        { id: 5, name: 'page' },
    ]
    return (
        <header>
            <h1>Hello React</h1>
            <nav>
                <ul>
                    {menus.map((menu) => (
                        <li key={menu.id}>
                            {/* <span>{menu.id}</span> */}
                            <a href="#">{menu.name}-{menu.id}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header