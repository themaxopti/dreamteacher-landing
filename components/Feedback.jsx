import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { useCallback, useRef } from 'react'


// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination';




export const Feedback = () => {

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slideNext()
    }, [])

    const sliderRef = useRef(null);

    return (
        <>
            <div className='section section__slider'>
                <div className='section__content'>
                    <div className='slider'>
                        <div className='feedback-title'>Отзывы</div>
                        <Swiper
                            ref={sliderRef}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            navigation={{
                                nextEl: '<div>some1</div>',
                                prevEl: '<div>some2</div>'
                            }}
                        >
                            <SwiperSlide>
                                <div className='slide-wrap'>
                                    <div className='slide-wrap__photo'>
                                        <div>
                                            <img src="/images/gleb.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className='slide-wrap__desc'>
                                        <div>Глеб (сдал ILETS на 6.0 для поступления в Литву)</div>
                                        <div>{"Благодаря детальному разбору моих ошибок в говорении и письме, я наконец смог правильно строить свои ответы даже с неожиданнами вопросами"}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide-wrap'>
                                    <div className='slide-wrap__photo'>
                                        <div>
                                            <img src="/images/girl-one.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className='slide-wrap__desc'>
                                        <div>Эльза (готовится к IELTS для поступления в Германию)</div>
                                        <div>{"Больше всего мне нравится, что Таня может объяснить сложные для понимания темы простым и доступным языком"}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='slide-wrap'>
                                    <div className='slide-wrap__photo'>
                                        <div>
                                            <img src="/images/girl-three.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className='slide-wrap__desc'>
                                        <div>Ангелина (готовится к сдаче IELTS на 7.0 для поступления в Германию)</div>
                                        <div>{"После работы с Таней всё разложено по полочкам, она даёт четкую и конструктивную оценку и появляется стимул работать ещё больше"}</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>


                        <div className='arrows'>
                            <div className='btn-one' onClick={handlePrev}>
                                <img className='arrow-one' src="/images/arrow1.svg" alt="" />
                            </div>
                            <div style={{ cursor: 'pointer' }} className='btn-two' onClick={handleNext}>
                                <img className='arrow-two' src="/images/arrow2.svg" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
