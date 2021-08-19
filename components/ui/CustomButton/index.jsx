/** @format */

import React from 'react'
import PropTypes from 'prop-types'

import styles from './CustomButton.module.scss'

function Button({
  color,
  text,
  size,
  onClick,
  disabling,
  type,
  form,
  status,
  className = '',
}) {
  return (
    <button
      form={form}
      type={type}
      className={`${styles.button} ${color ? color : ''} ${size ? size : ''} ${
        disabling ? styles.disabled : ''
      } ${status ? status : ''} ${className}`}
      onClick={onClick}
    >
      {text ? text : 'Button'}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  size: PropTypes.string,
  disabling: PropTypes.bool,
  status: PropTypes.string,
  form: PropTypes.string,
}

export default Button
