import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import styles from '../../styles/Blog.module.scss';

const Blog = () => {
  const { t } = useTranslation('blog');
  const posts = t('posts', {}, { returnObjects: true });
  const { lang } = useTranslation('');

  return (
    <div className={styles.container}>
      <div className={styles.blog}>
        <div className={styles.blog__pic} />
        <div className={styles.blog__list}>
          <div className={styles.blog_posts}>
            {lang === 'ru' && (
              <>
                <Link href="/blog/mission">
                  <div className={styles.blog_posts__item}>
                    <div className={styles.blog_posts__title}>Миссия</div>
                    <div className={styles.blog_posts__desc}>
                      Мы хотим, чтобы люди как можно реже обращались в микрокредитные компании за кредитом под высокий
                      процент, чтобы вылечить зубы, оплатить ремонт, купить одежду.
                    </div>
                  </div>
                </Link>
                <Link href="/blog/brera">
                  <div className={styles.blog_posts__item}>
                    <div className={styles.blog_posts__title}>
                      Как сеть кафе уменьшила текучку кадров на 25% за три месяца
                    </div>
                    <div className={styles.blog_posts__desc}>
                      За три месяца Cafe Brera сократило текучку и увеличило удовлетворенность работой сотрудников
                      просто разрешив им брать зарплату в любой момент.
                    </div>
                  </div>
                </Link>
              </>
            )}
            {posts.map((item, index) => {
              return (
                <Link href={`/blog/${index}`} key={index}>
                  <div className={styles.blog_posts__item}>
                    <div className={styles.blog_posts__title}>{item.title}</div>
                    <div className={styles.blog_posts__desc}>{item.desc}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
