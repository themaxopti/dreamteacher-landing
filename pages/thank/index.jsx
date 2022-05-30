import React from 'react'
import Link from 'next/link'


const Thank = () => {
    return (
        <div className='section'>
            <div className='section__content'>
                <div className="thank">
                    <div className='thank__wrap'>
                        <div>Присоединяйтесь в Телеграмм-чат и получайте в подарок подборку ТОПовых книг по подготовке к IELTS</div>
                        <Link href={"https://t.me/ielts2022withdreamteacher"}>
                            <div className='go'>
                                Присоединится
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Thank