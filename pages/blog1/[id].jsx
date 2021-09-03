import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Trans from 'next-translate/Trans';

import styles from '../../styles/Blog.module.scss';

const Post = () => {
  const router = useRouter();
  const { t } = useTranslation('blog');
  const { id } = router.query;
  const post = t('posts', {}, { returnObjects: true })[id];

  return (
    <div className={styles.container}>
      <div className={styles.post}>
        {post && (
          <>
            <div className={styles.post__head}>
              <div className={styles.post__title}>{post.title}</div>
            </div>
            <div className={styles.post__body}>
              <Trans i18nKey={`blog:posts.${id}.text`} components={[<br />]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
