import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';

import CustomInput from '../../ui/CustomInput';
import CustomButton from '../../ui/CustomButton';

import styles from './SubscriberForm.module.scss';

const SubscribeForm = () => {
  const { t } = useTranslation('employees');
  const { register, handleSubmit, errors } = useForm();
  const [submited, setSubmited] = useState(false);

  const onSubmit = (data) => {
    const date = new Date().toString();
    $crisp.push(['set', 'user:email', data.email]);
    $crisp.push(['set', 'session:event', [[['emplyee_subscribe', { date }, 'black']]]]);
    setSubmited(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {!submited && (
        <>
          <div className={styles.form__title}>{t('form.title')}</div>
          <div className={styles.form__wrapper}>
            <div className={styles.form__subtitle}>{t('form.title2')}</div>
            <div className={styles.form__input_container}>
              <CustomInput
                inputClass={styles.form__input}
                inputName="email"
                inputRef={register({
                  required: true,
                  pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                })}
                isError={errors.email}
                inputPlaceholder={t('form.email')}
              />
              <div>
                <CustomButton className={styles.form__button} type="submit" text={t('form.subscribe')} />
              </div>
            </div>
            {errors.email && <span className={styles.form__error_label}>{t('form.required')}</span>}
          </div>
        </>
      )}
      {submited && (
        <div className={styles.form__result}>
          <FormattedMessage id="form.subscribe.submitted" defaultMessage="Form has been submitted" />
        </div>
      )}
    </form>
  );
};

export default SubscribeForm;
