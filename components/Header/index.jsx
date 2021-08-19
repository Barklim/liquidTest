import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from './Header.module.scss';
import Flag from '../ui/Flag';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' },
  { code: 'kk', label: 'Қазақша' },
];

const Header = () => {
  const router = useRouter();
  const { t, lang } = useTranslation('common');
  const currentLang = languages.find((l) => l.code === lang);
  const switchLangs = languages.filter((lang) => lang.code !== currentLang.code);

  let navigation = [];
  if (lang === 'ru') {
    navigation.push({
      name: 'Миссия',
      link: '/blog/mission',
    });
  }
  navigation = [
    ...navigation,
    {
      name: t('header.item1'),
      link: '/',
    },
    {
      name: t('header.item2'),
      link: '/employees',
    },
    {
      name: t('header.item3'),
      link: '/blog',
    },
  ];

  const [burgerMenu, setBurgerMenu] = useState(false);
  const [popupLangs, setPopupLangs] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <div
          className={`${styles['header__mobile-btn']} ${burgerMenu && styles.close}`}
          onClick={() => setBurgerMenu(!burgerMenu)}
        />
        <div
          className={styles.header__logo}
          onClick={() => {
            router.push('/');
            setBurgerMenu(false);
          }}
        />
        <div className={`${styles.header__menu} ${burgerMenu ? styles.active : ''}`}>
          {navigation.map((item, i) => {
            return (
              <Link key={i} href={item.link}>
                <a
                  className={`${styles.header__link} ${router.pathname === item.link && styles.active}`}
                  onClick={(e) => setBurgerMenu(false)}
                >
                  {item.name}
                </a>
              </Link>
            );
          })}
          {switchLangs.map((lang) => (
            <Link key={lang.code} href={router.asPath} locale={lang.code}>
              <div className={`${styles.header__link} ${styles.lang}`} onClick={() => setBurgerMenu(false)}>
                <Flag code={lang.code} />
                <span>{lang.label}</span>
              </div>
            </Link>
          ))}
          <div className={styles.header__lang}>
            <Flag code={currentLang.code} onClick={() => setPopupLangs(!popupLangs)} />
            <div className={`${styles.header__langs} ${popupLangs ? styles.active : ''}`}>
              {switchLangs.map((lang) => (
                <Link key={lang.code} href={router.asPath} locale={lang.code}>
                  <div className={styles.li_item} onClick={() => setPopupLangs(false)}>
                    <Flag code={lang.code} />
                    <span>{lang.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
