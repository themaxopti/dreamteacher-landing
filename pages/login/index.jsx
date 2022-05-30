import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form'

import { useState } from 'react'

const Login = () => {

   


    const router = useRouter()

    const [isAdmin, setisAdmin] = useState('')


    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        console.log(data, errors)
        const origin = process.env.NODE_ENV == 'production' ? 'https://maxim-link.space/api/loginAdmin' : "http://localhost:5000/api/loginAdmin"
        const response = await axios.post(origin, data, { withCredentials: true })

        if (!response.data.isAdmin) {
            setisAdmin("Неверные данные")
            return
        } else if (response.data.isAdmin) {
            router.push('/admin')
        }
    }

    return (
        <div className='section'>
            <div className="section__content">
                <div className="login">
                    <form onSubmit={handleSubmit(onSubmit)} className='login-form'>

                        <div className='login-form__value'>
                            <div>Емейл</div>
                            <input {...register('email', { required: 'Заполните все поля' })} type="text" />
                        </div>
                        <div className='login-form__value'>
                            <div>Пароль</div>
                            <input {...register('password', { required: 'Заполните все поля' })} type="password" />
                        </div>
                        <div>
                            {isAdmin}
                        </div>
                        <div>
                            <input type="submit" value={"Войти"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login