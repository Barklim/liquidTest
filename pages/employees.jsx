import cls from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from '../styles/Page.module.scss';
import CustomButton from '../components/ui/CustomButton';
import SubscribeForm from '../components/forms/SubscribeForm';
import Accordion from '../components/ui/Accordion';

export default function Employees() {
  const { t, lang } = useTranslation('employees');

  const faqListLeft = [
    {
      title: t('faq.q1'),
      desc: t('faq.a1'),
    },
    {
      title: t('faq.q2'),
      desc: t('faq.a2'),
    },
  ];

  const faqListRight = [
    {
      title: t('faq.q3'),
      desc: t('faq.a2'),
    },
  ];

  const loginSignupButtons = (
    <>
      <CustomButton
        text={t('login')}
        className={styles.introduction__button}
        onClick={() => (window.location = 'https://app.liquidwage.com/ ')}
      />
      <CustomButton
        text={t('signup')}
        className={styles.introduction__button}
        onClick={() => (window.location = 'https://app.liquidwage.com/signup')}
      />
    </>
  );

  return (
    <div className={styles.cotainer}>
      <section className={cls([styles.section, styles['introduction-section']])}>
        <div className={cls([styles.introduction, styles.bg_embrace])}>
          <div className={styles.introduction__wrapper}>
            <h1 className={styles.introduction__title}>{t('s1.title')}</h1>
            <div className={cls([styles.introduction__desc, styles.first])}>{t('s1.desc')}</div>
            <div className={styles.introduction__buttons}>{loginSignupButtons}</div>
          </div>
        </div>
      </section>
      <section className="section steps-section">
        <div className={styles.cons}>
          <div className={styles.cons__col}>
            <div className={styles.cons__list}>
              <div className={styles.cons__item}>
                <img src="/images/icon.svg" alt="cons" />
                {t('s2.item1')}
              </div>
              <div className={styles.cons__item}>
                <img src="/images/icon.svg" alt="cons" />

                {t('s2.item2')}
              </div>
              <div className={styles.cons__item}>
                <img src="/images/icon.svg" alt="cons" />
                {t('s2.item3')}
              </div>
            </div>
          </div>
          <div className={styles.cons__col}>
            <div className={styles.cons__list}>
              <div className={styles.cons__item}>
                <img src="/images/icon.svg" alt="cons" />
                {t('s2.item4')}
              </div>
              <div className={styles.cons__item}>
                <img src="/images/icon.svg" alt="cons" />
                {t('s2.item5')}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.privacy}>
          <div className={styles.privacy__wrapper}>
            <div className={styles.privacy__title}>{t('s3.title')}</div>
            <div className={styles.privacy__desc}>{t('s3.desc')}</div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.faq}>
          <h2 className={styles.title}>{t('s4.title')}</h2>
          <div className={styles.faq__list}>
            <div className={styles.faq__col}>
              {faqListLeft.map((item, i) => {
                return (
                  <div className={styles.faq__item} key={i}>
                    <Accordion title={item.title}>{item.desc}</Accordion>
                  </div>
                );
              })}
            </div>
            <div className={styles.faq__col}>
              {faqListRight.map((item, i) => {
                return (
                  <div className={styles.faq__item} key={i}>
                    <Accordion title={item.title}>{item.desc}</Accordion>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div
          className={cls([styles.introduction, styles.bg_liquid])}
          style={{ backgroundImage: `url('/images/liquid_${lang}.svg')` }}
        >
          <div className={styles.introduction__wrapper}>
            <div className={styles.introduction__title}>{t('s5.title')}</div>
            {/* <div className={styles.introduction__desc}>{t('s5.desc')}</div> */}
            <div className={cls([styles.introduction__buttons, styles['small-margin']])}>{loginSignupButtons}</div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.quote}>
          <SubscribeForm />
        </div>
      </section>
    </div>
  );
}
