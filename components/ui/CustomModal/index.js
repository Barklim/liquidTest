import React, { useEffect, useRef } from 'react';
import Button from '../CustomButtonClose';
import styles from './Modal.module.scss';
import useTranslation from 'next-translate/useTranslation';

const Modal = ({ modalStyle, children, show, onClose, backdropStyle }) => {
  const { t } = useTranslation('index');
  const modalRef = useRef(null);
  useEffect(() => {
    if (show) {
      modalRef.current.classList.add(styles.visible);
    } else {
      modalRef.current.classList.remove(styles.visible);
    }
  }, [show]);
  return (
    <React.Fragment>
      <div ref={modalRef} style={backdropStyle} className={`${styles.modal__wrap}`}>
        <div style={modalStyle} className={styles.modal}>
          <div className={styles.modal__header}>
            <h2 className={styles.modal__title}>{t('form.title')}</h2>
            <Button
              onClick={onClose}
              style={{ width: 60, height: 40, position: 'none', top: 0, right: 0, margin: '1rem' }}
            >
              <div className={styles.close__icon}>
                <div
                  style={{
                    height: 20,
                    width: 20,
                    backgroundImage: `url("/images/cross.svg")`,
                  }}
                ></div>
              </div>
            </Button>
          </div>
          <div className={styles.modal__body}>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;
