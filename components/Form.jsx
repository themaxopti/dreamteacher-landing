import React from 'react'
import { useForm } from 'react-hook-form'
import { useState } from "react"
import axios from 'axios'


export const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = async (data) => {
        console.log(data, errors)
        const origin = process.env.NODE_ENV == 'production' ? 'https://yourdreamteacher-bot.herokuapp.com/api/newUser' : "http://localhost:5000/api/newUser"
        await axios.post(origin, data)
        window.location.href = 'https://t.me/DreamTeacherBot'
    }

    return (
        <>
            <div className='section' id='register'>
                <div className="section__content">
                    <form className='form' onSubmit={handleSubmit(onSubmit)}>
                        <div className='form__want'>Форма регистрации</div>
                        <div className='form__desc'>
                            Регистрируйтесь, переходите в Телеграм- бот
                            и вы получите в подарок подборку ТОПовых учебников для подготовки к IELTS в первом сообщении
                        </div>
                        <div className='form__cont'>
                            <label>
                                <p>Имя</p>
                                {errors.name?.message && <p className='form__error'>{errors.name.message}</p>}

                                <input type="text"
                                    {...register("name", {
                                        required: 'Заполните это поле',
                                        minLength: {
                                            value: 1,
                                            message: 'Введите имя'
                                        }
                                    })}
                                />
                            </label>
                            <label>
                                <p>Емейл</p>
                                {errors.email?.message && <p className='form__error'>{errors.email.message}</p>}
                                <input type="text"
                                    {...register("email", {
                                        required: 'Заполните это поле поля',
                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Введите корректный емейл'
                                        }
                                    })}
                                />
                            </label>

                            <label>
                                <p>Телефон</p>
                                {errors.phone?.message && <p className='form__error'>{errors.phone.message}</p>}
                                <input type="text"
                                    {...register('phone', {
                                        required: 'Заполните это поле',
                                        maxLength: {
                                            value: 13,
                                            message: 'Максимальна длина 13 символов'
                                        },
                                        pattern: {
                                            value: /^[0-9+-]+$/,
                                            message: "Введите корректный номер телефона"
                                        },
                                        minLength: {
                                            value: 6,
                                            message: "Минимальная длина 6 символов"
                                        }
                                    })}
                                />
                            </label>
                            <input type="submit" value={"Записаться"} />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
