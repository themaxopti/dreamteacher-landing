import Head from 'next/head'
import Script from 'next/script'
import '../styles/globals.scss'
import { useEffect } from 'react'
import { useRouter } from 'next/router'


function MyApp({ Component, pageProps }) {

  const router = useRouter()

  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('428428595603693') //  428428595603693
        ReactPixel.pageView()
        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
  }, [router.events])


  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/logoHead.svg" />
        <meta name="facebook-domain-verification" content="j9w8vetirw810h4y5psnlskltm87q3" />
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta> */}
      </Head>
      <Component {...pageProps} />

      <Script id="facebook-pixel">
        {`
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '428428595603693');
fbq('track', 'PageView');
fbq('track', 'CompleteRegistration');
fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});
`}
      </Script>
    </>
  )
}

export default MyApp
