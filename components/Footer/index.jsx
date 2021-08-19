import Link from 'next/link'
import { useRouter } from 'next/router'
import useTranslation from 'next-translate/useTranslation'

import styles from './Footer.module.scss'

const Footer = () => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const navigation = [
    {
      name: t('footer.item1'),
      link: '/',
    },
    {
      name: t('footer.item2'),
      link: '/employees',
    },
    {
      name: t('footer.item3'),
      link: '/blog',
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__social}>
          <div className={styles.social}>
            <a
              className={`${styles.social__link} ${styles.fb}`}
              href={t('footer.facebook_link')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t('footer.facebook')}</span>
            </a>
            <a
              className={`${styles.social__link} ${styles.ig}`}
              href={'https://instagram.com/liquidwage'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t('footer.instagram')}</span>
            </a>
          </div>
        </div>
        <div className={styles.footer__navigation}>
          {navigation.map((item, i) => {
            return (
              <Link key={i} href={item.link}>
                <a
                  className={`${styles.footer__link} ${
                    router.pathname === item.link && styles.active
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            )
          })}
        </div>
        <div className={styles.footer__copyright}>
          {t('footer.line1')}
          <br />
          {t('footer.line2')}
          { t('footer.email').length ?
            <Link href={`mailto:${t('footer.email')}`}>
              <a className={styles.footer__email}>{t('footer.email')}</a>
            </Link>
            : null
          }
          <br />
          {t('footer.line3')}
          <br />
        </div>
      </div>
    </footer>
  )
}

export default Footer
