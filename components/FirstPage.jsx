import Link from 'next/link'
import React from 'react'

export const FirstPage = () => {
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
                            <div className='mobile'>
                                Уже в этот чт, 2 июня в 19:00 по Киеву <br />
                                где вы узнаете:
                            </div>
                            <div className='first-page__text-line'>
                                <div>
                                    <div className='dot'></div>
                                    <div>Какие 3 ошибки снижают вам бал на тесте?</div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    <div>Какие темы стоит ожидать на Speaking в этом году?</div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    <div>К чему нужно быть готовым во время сдачи IELTS?</div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    <div>Интересные кейсы моих студентов во время IELTS?</div>
                                </div>
                                <div>
                                    <div className='dot'></div>
                                    <div>Программу 8-недельного авторского курса «IELTS OF YOUR DREAM» - курса полной подготовки к сдаче IELTS.</div>
                                </div>
                            </div>
                        </div>
                        <div className='first-page__main-photo hidden-mobile'>
                            {/* <div className='first-page__tan-desc'>Татьяна Лозик – Сертифицированный IELTS <br />  Coach</div> */}
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
        </div>
    )
}
