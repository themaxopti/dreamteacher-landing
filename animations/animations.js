import { useMediaQuery } from 'react-responsive'



export const useSideAnimation = (x, y = 0) => {

    const isBig = useMediaQuery({
        query: '(min-width: 1000px)'
    })

    if (isBig) {
        return {
            hidden: {
                x,
                y,
                opacity: 0
            },
            visible: (custom) => ({
                x: 0,
                y: 0,
                opacity: 1,
                transition: { delay: custom }
            })
        }
    } else {
        return {
            hidden: {
                x: 0,
                y: 0,
                opacity: 1
            },
            visible: (custom) => ({
                x: 0,
                y: 0,
                opacity: 1,
            })
        }
    }

}