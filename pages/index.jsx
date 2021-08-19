import cls from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from '@brainhubeu/react-carousel';

import styles from '../styles/Page.module.scss';
import CustomButton from '../components/ui/CustomButton';
import CustomLink from '../components/ui/CustomLink';
import Accordion from '../components/ui/Accordion';

import { useRouter } from 'next/router';

const handleScheduleDemo = (t) => {
  $crisp.push(['do', 'chat:open']);
  $crisp.push(['do', 'chat:show']);
  $crisp.push(['do', 'message:send', ['text', t('demo-message')]]);
};

export default function Index() {
  const { t, lang } = useTranslation('index');

  const router = useRouter();
  console.log('!!!');
  console.log(router.locale);

  const faqListLeft = [
    {
      title: t('faq.q1'),
      desc: t('faq.a1'),
    },
    {
      title: t('faq.q2'),
      desc: t('faq.a2'),
    },
    {
      title: t('faq.q3'),
      desc: t('faq.a3'),
    },
  ];

  const faqListRight = [
    {
      title: t('faq.q4'),
      desc: t('faq.a4'),
    },
    {
      title: t('faq.q5'),
      desc: t('faq.a5'),
    },
    {
      title: t('faq.q6'),
      desc: t('faq.a6'),
    },
  ];

  const demoButtons = (
    <>
      <CustomButton className={styles.introduction__button} text={t('demo')} onClick={() => handleScheduleDemo(t)} />
      <CustomButton
        className={styles.introduction__button}
        text={t('contactus')}
        onClick={() => {
          if (window.$crisp) {
            window.$crisp.push(['do', 'chat:open']);
            window.$crisp.push(['do', 'chat:show']);
          }
        }}
      />
    </>
  );

  return (
    <div className={styles.container}>
      <section className={cls([styles.section, styles['introduction-section']])}>
        <div
          className={cls([styles.introduction, styles.bg_workplace])}
          style={{ backgroundImage: `url('/images/introduction_${lang}.svg')` }}
        >
          <div className={styles.introduction__wrapper}>
            <h1 className={styles.introduction__title}>{t('s1.title')}</h1>
            <div className={cls([styles.introduction__desc, styles.first])}>{t('s1.desc')}</div>
            <div className={styles.introduction__buttons}>{demoButtons}</div>
          </div>
        </div>
      </section>
      <section className={cls([styles.section, styles['steps-section']])}>
        <div className={styles.steps}>
          <div className={styles.steps__item}>{t('s1.step1')}</div>
          <div className={styles.steps__item}>{t('s1.step2')}</div>
          <div className={styles.steps__item}>{t('s1.step3')}</div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.quote}>{t('partnerships')}</div>
      </section>
      <section className={styles.section}>
        <div className={styles.cons}>
          <div className={styles.cons__col}>
            <div className={styles.cons__title}>{t('s2.t1')}</div>
            <div className={styles.cons__list}>
              <div className={styles.cons__item}>{t('s2.item1')}</div>
              <div className={styles.cons__item}>{t('s2.item2')}</div>
              <div className={styles.cons__item}>{t('s2.item3')}</div>
              <div className={styles.cons__item}>{t('s2.item4')}</div>
            </div>
          </div>
          <div className={styles.cons__col}>
            <div className={styles.cons__title}>{t('s2.t2')}</div>
            <div className={styles.cons__list}>
              <div className={styles.cons__item}>{t('s2.item5')}</div>
              <div className={styles.cons__item}>{t('s2.item6')}</div>
              <div className={styles.cons__item}>{t('s2.item7')}</div>
              <div className={styles.cons__item}>{t('s2.item8')}</div>
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
        <div className={styles.cases}>
          <h2 className={styles.title}>{t('s4.title')}</h2>
          <div className={styles.cases__list}>
            <div className={styles.slider}>
              <Carousel slidesPerPage={2} arrows>
                <div className={styles.slider__item}>
                  <div className={styles.slider__head}>
                    <div className={styles.slider__logo} />
                  </div>
                  <div className={styles.slider__desc}>{t('s4.case1_1')}</div>
                  <div className={styles.slider__desc}>
                    {t('s4.case1_2')}
                    <ul>
                      <li>{t('s4.case1_3')}</li>
                      <li>{t('s4.case1_4')}</li>
                      <li>{t('s4.case1_5')}</li>
                    </ul>
                  </div>
                  <div className={styles.slider__desc}>{t('s4.case1_6')}</div>
                </div>
                <div className={styles.slider__item}>
                  <div className={styles.slider__head}>
                    <div className={styles.slider__person}>
                      <LazyLoadImage className={styles.slider__photo} src="/images/photo-1.png" alt={t('s4.case2_1')} />

                      <div className={styles.slider__info}>
                        <div className={styles.slider__name}>{t('s4.case2_1')}</div>
                        <div className={styles.slider__post}>{t('s4.case2_2')}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider__desc}>{t('s4.case2_3')}</div>
                </div>
                <div className={styles.slider__item}>
                  <div className={styles.slider__head}>
                    <div className={styles.slider__person}>
                      <LazyLoadImage className={styles.slider__photo} src="/images/photo-2.png" alt={t('s4.case3_1')} />

                      <div className={styles.slider__info}>
                        <div className={styles.slider__name}>{t('s4.case3_1')}</div>
                        <div className={styles.slider__post}>{t('s4.case3_2')}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider__desc}>{t('s4.case3_3')}</div>
                </div>
                <div className={styles.slider__item}>
                  <div className={styles.slider__head}>
                    <div className={styles.slider__person}>
                      <LazyLoadImage className={styles.slider__photo} src="/images/photo-3.png" alt={t('s4.case4_1')} />
                      <div className={styles.slider__info}>
                        <div className={styles.slider__name}>{t('s4.case4_1')}</div>
                        <div className={styles.slider__post}>{t('s4.case4_2')}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider__desc}>{t('s4.case4_3')}</div>
                </div>
                <div className={styles.slider__item}>
                  <div className={styles.slider__head}>
                    <div className={styles.slider__person}>
                      <LazyLoadImage className={styles.slider__photo} src="/images/photo-4.png" alt={t('s4.case5_1')} />
                      <div className={styles.slider__info}>
                        <div className={styles.slider__name}>{t('s4.case5_1')}</div>
                        <div className={styles.slider__post}>{t('s4.case5_2')}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slider__desc}>{t('s4.case5_3')}</div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.faq}>
          <h2 className={styles.title}>{t('faq.title')}</h2>
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
          className={cls([styles.introduction, styles.bg_financial])}
          style={{ backgroundImage: `url('/images/join_${lang}.svg')` }}
        >
          <div className={styles.introduction__wrapper}>
            <div className={styles.introduction__title}>{t('s5.title')}</div>
            <div className={styles.introduction__desc}>{t('s5.desc')}</div>
            <div className={cls([styles.introduction__buttons, styles['small-margin']])}>{demoButtons}</div>
            <div className={styles.introduction__question}>
              <div className={styles.introduction__subtitle}>{t('s6.title')}</div>
            </div>
            <div className={styles.introduction__desc}>
              <CustomLink title={t('s6.link')} withRoute url="/employees" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
