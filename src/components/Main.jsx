import React from 'react'
import './Main.css';

const Main = () => {
    const user ={
        name :'Liz.B',
        isLogin: true
    }

    return (
        <main>

            {/* if(user.isLogin) {
                return <button className='logout'>로그아웃</button>
            } else {
                return <button className='login'>로그인</button>
            } */}

            {user.isLogin ? 
                <button className='logout'>로그아웃</button>:
                <button className='login'>로그인</button> 
            }

        </main>
    )
}

export default Main