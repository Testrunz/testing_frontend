import styles from '../index.module.css';
function Modal(props) {
    return (
      <div className={styles.modal}>
        <p>{props.text}</p>
        <button className={`${styles.btn} ${styles.btnalt}`} onClick={props.onClose}>
          Cancel
        </button>
        <button className={styles.btn} onClick={props.onClose}>
          Confirm
        </button>
      </div>
    );
  }
  
  export default Modal;