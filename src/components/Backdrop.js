import styles from '../index.module.css';
function Backdrop(props) {
    return <div className={styles.backdrop} onClick={props.onClick} />;
  }
  
  export default Backdrop;