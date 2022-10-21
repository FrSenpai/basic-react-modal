import React from 'react'
import styles from './styles.module.css'
/**
 * 
 * @param {boolean} show - Use this to show or hide the modal
 * @param {JSX.Element} children - Use this to put the content of the modal
 * @param {function} close - Use this to close the modal
 * @param {object} contentContainerStyle - Use this to style the content container
 * @param {object} overlayStyle - Use this to style the modal container (overlay)
 * @description This is a basic modal component
 * @returns {JSX.Element}
 */
export const CustomModal = ({ show, children, close, overlayStyle, contentContainerStyle }) => {
  return (
        <div onClick={() => {
            close()
        }} style={overlayStyle ? overlayStyle : undefined} className={!show ? styles.ctnModal + " " + styles.hidden : styles.ctnModal}>
            <section style={contentContainerStyle ? contentContainerStyle : undefined} onClick={(e) => {e.stopPropagation()}} className={styles.modal}>
                {children}
            </section>
        </div>
    )
}
