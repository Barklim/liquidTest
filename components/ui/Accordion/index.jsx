import React, { useState } from 'react'

import styles from './Accordion.module.scss'

const Accordion = ({ name, title, initActive = false, children }) => {
  const [isActive, setActive] = useState(initActive)

  const toggleActive = () => setActive(!isActive)

  return (
    <div className={`${styles.accordion} ${isActive ? styles.active : ''}`}>
      <div
        className={styles.accordion__head}
        onClick={() => {
          toggleActive()
        }}
      >
        {name && <div className={styles.accordion__name}>{name}</div>}

        <div className={styles.accordion__title}>{title}</div>
      </div>
      <div className={styles.accordion__body}>{children}</div>
    </div>
  )
}

export default Accordion
