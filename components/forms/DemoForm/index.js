import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

import CustomInput from '../../ui/CustomInput';
import CustomButton from '../../ui/CustomButton';

import styles from './DemoForm.module.scss';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

const DemoForm = () => {
  const router = useRouter();
  let lang = 'US';
  router.locale === 'ru' ? (lang = 'RU') : null;
  router.locale === 'kk' ? (lang = 'KZ') : null;
  const { t } = useTranslation('index');
  console.log('!!!');
  console.log(lang);
  console.log('!!!');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // defaultValues: { name: data.name, email: data.email,  tel: data.tel, },
    mode: 'onBlur',
  });
  const [submited, setSubmited] = useState(false);

  const [value, setValue] = useState();

  const onSubmit = (data) => {
    const date = new Date().toString();

    const sendData = {
      name: data.name,
      phoneNumber: data.tel,
      email: data.email,
    };

    setSubmited(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {!submited && (
        <>
          <div className={styles.form__wrapper}>
            <div className={styles.form__input_container}>
              <CustomInput
                inputClass={styles.form__input}
                inputName="name"
                inputRef={register({
                  required: true,
                  minLength: {
                    value: 3,
                    message: t('form.required_name_min'),
                  },
                })}
                isError={errors.name}
                inputPlaceholder={t('form.name')}
              />
              {errors.name?.type === 'required' && (
                <div className={styles.form__error_label}>{t('form.required_name')}</div>
              )}
              <div className={styles.form__error_label}>{errors.name?.message}</div>
              <CustomInput
                inputType="email"
                inputClass={styles.form__input}
                inputName="email"
                inputRef={register({
                  required: true,
                  pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g,
                })}
                isError={errors.email}
                inputPlaceholder={t('form.email')}
              />
              {errors.email && <div className={styles.form__error_label}>{t('form.required_email')}</div>}
              <PhoneInput
                defaultCountry={lang}
                placeholder={t('form.tel')}
                value={value}
                onChange={setValue}
                className={styles.PhoneInputInput}
                name="tel"
                ref={register({
                  required: true,
                })}
              />
              {errors.tel?.type === 'required' && (
                <div className={styles.form__error_label}>{t('form.required_tel')}</div>
              )}
              {errors.tel?.message}
              <div className={styles.form__agreement}>
                <label className={styles.form__customCheckbox}>
                  <input
                    type="checkbox"
                    className={styles.form__checkbox}
                    name="agreement"
                    ref={register({
                      required: true,
                    })}
                  ></input>
                  <span></span>
                </label>
                <div>
                  {t('form.agreement_p1')}
                  <a className={styles.link} href={'/userAgreement.pdf'} download>
                    {t('form.agreement_p2')}
                  </a>
                </div>
              </div>
              <div className={styles.form__wrapButton}>
                <CustomButton className={styles.form__button} type="submit" text={t('form.subscribe')} />
              </div>
            </div>
            {errors.agreement && <span className={styles.form__error_label}>{t('form.required')}</span>}
          </div>
        </>
      )}
      {submited && (
        <div className={styles.form__result}>
          <div id="form.subscribe.submitted">{t('form.result')}</div>
        </div>
      )}
    </form>
  );
};

export default DemoForm;
