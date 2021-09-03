import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from '../../styles/Blog.module.scss';

const Post = () => {
  const [article, loadedArticle] = useState('');
  const [data, isLoaded] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  let lang = router.locale;
  let content = article.content?.rendered;
  let title = article.title?.rendered;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // let getArticle = axios.get(`http://localhost:8000/wp-json/wp/v2/blog?slug=${id}&lang=${lang}`);
    let getArticle = axios.get(`https://liquidwage123123.000webhostapp.com/wp-json/wp/v2/blog?slug=${id}&lang=${lang}`);

    Promise.all([getArticle]).then((res) => {
      isLoaded(false);
      loadedArticle(res[0].data[0]);
      console.log('🚀 ~ file: [id].jsx ~ line 31 ~ Promise.all ~ res', res);
    });
  };

  return (
    <div className={styles.container}>
      {!isLoaded && <div className={styles.loading}>loading...</div>}
      {isLoaded && (
        <div className={styles.article__wrapper}>
          <div className={styles.article__header}>
            <div className={styles.article__header_h1}>{title}</div>
          </div>
          <div className={styles.article__body}>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
