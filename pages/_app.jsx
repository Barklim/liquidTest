import Head from 'next/head';
import cls from 'classnames';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation';
import ReactGA from 'react-ga'

import Header from '../components/Header';
import Footer from '../components/Footer';
import useWebpSupport from '../utils/useWebpSupport';

import '@brainhubeu/react-carousel/lib/style.css';
import '../styles/globals.scss';
import styles from '../styles/App.module.scss';

ReactGA.initialize('G-DQLV2XVECE', {
  // @todo: remove this later on when we have some traffic
  siteSpeedSampleRate: 100,
})

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  // generate pageview event when route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      ReactGA.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const { t } = useTranslation('common');
  const webp = useWebpSupport();
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.desc')} />
        <link rel="alternate" hrefLang="en" href="http://liquidwage.com/en" />
        <link rel="alternate" hrefLang="ru" href="http://liquidwage.com/ru" />
        <link rel="alternate" hrefLang="kk" href="http://liquidwage.com/kk" />
        <link rel="icon" href="/icons/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="//fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: 'window.$crisp=[];window.CRISP_WEBSITE_ID="84483c2b-edc2-4f11-bf22-d4757abe9b5b";',
          }}
        />

        <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className={cls([styles.app, webp ? 'webp' : 'no-webp'])}>
        <Header />
        <div className={styles.container}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
