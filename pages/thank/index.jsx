import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useEffect } from 'react'


const Thank = () => {

    const sendPresent = async () => {
        const origin = process.env.NODE_ENV == 'production' ? 'https://yourdreamteacher-bot.herokuapp.com/api/getPresent' : "http://localhost:5000/api/getPresent"
        await axios.post(origin, { email: localStorage.getItem('email') })
        window.location.href = "https://t.me/ielts2022withdreamteacher"
    }

    useEffect(() => {
        console.log(localStorage.getItem('email'));
    }, [])

    return (
        <div className='section'>
            <div className='section__content'>
                <div className="thank">
                    <div className='thank__wrap'>
                        <div>Присоединяйтесь в Телеграмм-чат и получайте в подарок подборку ТОПовых книг по подготовке к IELTS</div>
                        <div onClick={sendPresent} className='go'>
                            Присоединится
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Thank