import React from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

const CustomLink = ({ title, url, target = '_blank', withRoute }) => {
  return withRoute ? (
    <Link href={url}>
      <a className={styles.link}>{title}</a>
    </Link>
  ) : (
    <a className={styles.link} href={url} target={target}>
      {title}
    </a>
  )
}

export default CustomLink
