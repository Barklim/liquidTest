import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './ArticleItem.module.scss';

function ArticleItem({ article }) {
  const [imgUrl, loadedImgUrl] = useState('');
  const [artAuthor, loadedArtAuthor] = useState('');
  const [data, isLoaded] = useState(false);

  let slug = article.slug;
  let title = article.title?.rendered;
  let excerpt = article.excerpt?.rendered;
  let { featured_media, author } = article;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (!article.default) {
      let getImgUrl = '';
      // !!featured_media ? (getImgUrl = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`)) : null;
      !!featured_media
        ? (getImgUrl = axios.get(`https://liquidwage123123.000webhostapp.com/wp-json/wp/v2/media/${featured_media}`))
        : null;

      // let getAuthor = axios.get(`http://localhost:8000/wp-json/wp/v2/users/${author}`);
      // let getAuthor = axios.get(`https://liquidwage123123.000webhostapp.com/wp-json/wp/v2/users/${author}`);

      Promise.all([getImgUrl]).then((res) => {
        !!featured_media ? loadedImgUrl(res[0].data.media_details.sizes.full.source_url) : null;
        // loadedArtAuthor(res[1].data.name);
        isLoaded(true);
      });
    }
  };

  return (
    <div className={styles.article__item}>
      {!isLoaded && <div className={styles.X}>loading...</div>}
      {isLoaded && (
        <Link href={`/blog/${slug}`}>
          <a>
            <div className={styles.article__header}>{title}</div>
            {!!imgUrl && <img className={styles.article__img} src={imgUrl} alt={title}></img>}
            <div className={styles.article__body} dangerouslySetInnerHTML={{ __html: excerpt }}></div>
          </a>
        </Link>
      )}
    </div>
  );
}

export default ArticleItem;
