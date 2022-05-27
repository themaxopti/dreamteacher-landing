import React from 'react'

export const SecondPage = () => {
    return (
        <>
            <div className='section section-two'>
                <div className="section__content">
                    <div className="second-page">
                        <div className='second-page__who'>Кто проводит вебинар?</div>
                        <div className='second-page__main'>
                            <div className='second-page__photo'>
                                <div>
                                    <img src="/images/tanya-two.png" alt="" />
                                </div>
                            </div>
                            <div className='second-page__desc'>
                                Татьяна Лозик: <br />
                                - благодаря IELTS получила грант на образование в Литве и Франции  <br />
                                - прошла стажировку в Испании и Великобритании <br />
                                - основала рекрутинговый стартап в США <br />
                                - разработала авторский курс подготовки к IELTS, помогающий студентам «хакнуть» этот тест <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
