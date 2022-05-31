import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useSideAnimation } from '../animations/animations'


const Spoiler = ({ children, question }) => {
    const [active, setActive] = useState(false)

    return (
        <>
            <div
                className='cont__title'
                onClick={e => setActive(true)}
            >{question}</div>
            <div
                className={`cont__hid ${active ? "active" : ""}`}
                variants={useSideAnimation(0)}
            >
                {children}
            </div>
        </>
    )
}


export const FirstPage = () => {

    const [active, setActive] = useState(false)

    return (
        <div className='section first-section'>
            <div className="section__content section_fullscreen">
                <div className="first-page">
                    <div className="first-page__col-one">
                        <div className='first-page__inst'>
                            <div className='first-page__in-photo'>
                                <img src="/images/instagram.svg" alt="" />
                            </div>
                            <div className='first-page__in-link'>
                                <Link target={'_blank'} href={"https://www.instagram.com/english_dreamteacher/?utm_medium=copy_link"}>
                                    english_dreamteacher
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className="first-page__col-two">
                        <div className='first-page__main-text'>
                            <div className='first-page__text-one'> <span className='hid'> 2 июня в 19.00 (по Киеву) состоится  </span> <span className='big-l'>о</span>нлайн вебинар <br />
                                «Как сдать IELTS в 2022 году»
                            </div>
                            <div className='first-page__main-photo'>

                                {/* <div className='first-page__tan-desc'>Татьяна Лозик – Сертифицированный IELTS <br />  Coach</div> */}
                                <div className='first-page__tanya hidden-pc'>
                                    <div>
                                        <img src="/images/Tanya-one.png" alt="" />
                                    </div>
                                </div>

                                {/* <div className='first-page__tan-desc'>Татьяна Лозик – Сертифицированный IELTS <br />  Coach</div> */}
                            </div>
                            <div className='btn-register hidden'>
                                <div><a href="#register"> Зарегестрироваться </a></div>
                            </div>
                            <div className='mobile'>
                                Уже в этот четверг, 2 июня в 19:00 по Киеву
                                где вы узнаете:
                            </div>
                            <div className='first-page__text-line'>
                                <div className=''>
                                    <div className='dot'></div>
                                    <div className='cont'>
                                        <Spoiler question={"Какие 3 ошибки снижают вам бал на тесте?"}>
                                            Большинство учеников допускают из раза в раз одинаковые ошибки.
                                            Их очень легко устранить, если сразу обратить внимание на эти ошибки  при подготовке.
                                            Я расскажу вам про эти нюансы и вы точно не потеряете свой бал на тесте.
                                        </Spoiler>
                                    </div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    <div className="cont">
                                        <Spoiler question={"Какие темы стоит ожидать на Speaking в этом году?"}>
                                            Думаете, для того, чтобы сдать IELTS нужно знать всё и уметь говорить на любые темы? <br />
                                            Нет! Важно знать темы, которые будут актуальны. И уже в этих рамках формировать свой словарный запас. Как отвечать на вопросы о военных конфликтах, эпидемиях и других актуальных темах этого года я  расскажу вам на вебинаре. Вы перестанете учить всё подряд – вы узнаете, что именно вам нужно.
                                        </Spoiler>
                                    </div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    <div className="cont">
                                        <Spoiler question={"К чему нужно быть готовым во время сдачи IELTS?"}>
                                            Когда вы приходите сдавать тест, вы скорее всего столкнетесь с ситуациями, к которым не были готовы. Начнете стрессовать и терять время. Я расскажу вам всю подноготную процедуры сдачи теста и вы избежите этих неожиданностей.
                                            Кейсы учеников:
                                        </Spoiler>
                                    </div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    {/* <div>Интересные кейсы моих студентов во время IELTS?</div> */}
                                    <div className="cont">
                                        <Spoiler question={"Интересные кейсы моих студентов во время IELTS?"}>
                                            {"Не переживайте, вы сделали все, что могли"}
                                            Представляете услышать такое от экзаменатора?! Так сказали моему студенту, когда он разволновался на тесте. И тем не менее он получил баллы выше, чем планировал. На вебинаре поделюсь этим кейсом и другими историями моих студентов
                                        </Spoiler>
                                    </div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    {/* <div>Программу 8-недельного авторского курса «IELTS OF YOUR DREAM» - курса полной подготовки к сдаче IELTS.</div> */}
                                    <div className="cont">
                                        <Spoiler question={"Программу 8-недельного авторского курса «IELTS OF YOUR DREAM» - курса полной подготовки к сдаче IELTS"}>
                                            Сдача IELTS – это не просто про получение оценки по тесту, это про билет в новую жизнь: обучение в ВУЗе мечты, переезде заграницу или начале работы в топовой международной компании. И без тщательной подготовки можно упустить эту возможность. И нет, высокого уровня английского недостаточно! На вебинаре я расскажу, как готовятся мои студенты и презентую программу курса «IELTS of Your Dream». Вы сможете записаться по самой выгодной цене!
                                        </Spoiler>
                                    </div>
                                </div>
                                <div className='btn-register big'>
                                    <div style={{marginBottom:"40px"}}><a href="#register">Зарегестрироваться</a></div>
                                </div>
                            </div>
                        </div>
                        <div className='first-page__main-photo hidden-mobile'>
                            {/* <div className='first-page__tan-desc'>Татьяна Лозик – Сертифицированный IELTS <br />  Coach</div> */}
                            {/* <div className='btn-register big'>
                                <div><a href="#register">Зарегестрироваться</a></div>
                            </div> */}
                            <div className='first-page__tanya'>
                                <div>
                                    <img src="/images/Tanya-one.png" alt="" />
                                </div>
                            </div>
                            {/* <div className='first-page__tan-desc'>Татьяна Лозик – Сертифицированный IELTS <br />  Coach</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
