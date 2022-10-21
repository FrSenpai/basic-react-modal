import React from 'react'
import styles from './styles.module.css'
/**
 * 
 * @param {boolean} show - Use this to show or hide the modal
 * @param {JSX.Element} children - Use this to put the content of the modal
 * @param {function} close - Use this to close the modal
 * @description This is a basic modal component
 * @returns {JSX.Element}
 */
export const CustomModal = ({ show, children, close }) => {
  return (
        <div onClick={() => {
            close()
        }} className={!show ? styles.ctnModal + " " + styles.hidden : styles.ctnModal}>
            <section onClick={(e) => {e.stopPropagation()}} className={styles.modal}>
                {children}
            </section>
        </div>
    )
}
