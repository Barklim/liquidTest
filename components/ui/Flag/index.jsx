import styles from './Flag.module.scss'

const Flag = ({ code, onClick }) => (
  <div className={styles.flag} onClick={onClick}>
    <img src={`/images/flags/${code}.svg`} />
  </div>
)
export default Flag
