import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ArticleItem from '../../components/Blog/';

import styles from '../../styles/Blog.module.scss';

const Blog = () => {
  const router = useRouter();
  let lang = router.locale;
  const [books, getBooks] = useState([{ id: 1, default: true }]);
  const [data, isLoaded] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(`http://localhost:8000//wp-json/wp/v2/blog?lang=${lang}`)
      // .get(`https://liquidwage123123.000webhostapp.com/wp-json/wp/v2/blog?lang=${lang}`)
      .then((response) => {
        const allBooks = response.data;
        getBooks(allBooks);
        isLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.article}>
      <div className={styles.article__pic}></div>
      {!isLoaded && <div className={styles.form__error_label}>loading...</div>}
      <div className={styles.article__container}>
        {books.map((book) => (
          <ArticleItem key={book.id} article={book} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
