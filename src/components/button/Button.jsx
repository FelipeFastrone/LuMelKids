/* eslint-disable react/prop-types */



import styles from './Button.module.css'
function Button({type, text, href, icon}) {
  return (
    <div>
        <a href={href}
           rel='noreferrer'
           target='_blank'
        >
        <button type={type} className={styles.btn}>
         {text}{icon}
        </button>
        </a>

    </div>
  )
}

export default Button