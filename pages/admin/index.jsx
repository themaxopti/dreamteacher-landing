import axios from 'axios'
import React from 'react'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'



const Admin = () => {
    const router = useRouter()

    async function effect() {
        const origin = process.env.NODE_ENV == 'production' ? 'https://yourdreamteacher-bot.herokuapp.com/api/authAdmin' : "http://localhost:5000/api/authAdmin"
        const response = await axios.get(origin, { withCredentials: true })
        if (!response.data.isAdmin) {
            return router.push('/login')
        }
        choose("users")
        console.log('admin');
        return () => {

        }
    }

    const logout = () => {
        const origin = process.env.NODE_ENV == 'production' ? 'https://yourdreamteacher-bot.herokuapp.com/api/logout' : "http://localhost:5000/api/logout"
        axios.get(origin, { withCredentials: true })
    }

    useEffect(() => {
        effect()
    }, [])

    async function choose(title) {
        if (title == 'users') {
            const response = await axios.get('http://localhost:5000/api/getUsers')
            console.log(response.data)
            setInChat(null)
            setUsers(response.data)
        }

        if (title == 'chat') {
            const response = await axios.get('http://localhost:5000/api/getUsersReg')
            console.log(response.data)
            setUsers(null)
            setInChat(response.data)
        }
    }

    const [inChat, setInChat] = useState([])
    const [users, setUsers] = useState([])

    return (
        <>
            <div className='section'>
                <div className='section__content'>
                    <div className="admin">
                        <div onClick={logout} style={{ marginTop: '20px' }}>Выйти</div>
                        <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
                            <div style={{ cursor: 'pointer' }} onClick={() => choose("users")}>Пользователи,нажавшие кнопку {"`Зарегестрироваться`"}</div>
                            <div style={{ cursor: 'pointer' }} onClick={() => choose("chat")} >Пользователи,которые вошли в чат</div>
                        </div>
                        <div className='content'>
                            {
                                users?.map((el, i) => <div key={i} className='user-in-chat'>
                                    <div>{el.email}</div>
                                    <div>{el.name}</div>
                                    <div>{el.phone}</div>
                                </div>)
                                ||
                                inChat.map((el, i) => <div key={i} className='user-in-chat'>
                                    <div>{el.email}</div>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Admin