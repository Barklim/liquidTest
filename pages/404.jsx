import useTranslation from 'next-translate/useTranslation'

import CustomButton from '../components/ui/CustomButton'

import styles from '../styles/404.module.scss'

const Error = ({ history }) => {
  const { t } = useTranslation('common')
  return (
    <div className={styles.error}>
      <div className={styles.error__wrapper}>
        <div className={styles.error__top}>404</div>
        <div className={styles.error__desc}>{t('404_title')}</div>
        <div className={styles.error__button}>
          <CustomButton
            text={t('404_back')}
            onClick={() => history.push('/')}
          />
        </div>
      </div>
    </div>
  )
}

export default Error
