import clsx from 'clsx'

import styles from './Button.module.scss'


function Button({ primary, disabled }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled,
        'd-flex': true
    })

    return (
        <>
            <button className={classes}>
                Click me!
            </button>
            {/* <button className={`${styles.btn} ${styles.active}`}> */}
            {/* <button className={[styles.btn, styles.active].join(' ')}> */}
            {/* <button className={clsx(styles.btn, styles.active)}> */}
            <button className={clsx(styles.btn, {
                [styles.active]: true
            })}>
                Click me!
            </button>
        </>
    )
}

export default Button