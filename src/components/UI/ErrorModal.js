import ReactDom from 'react-dom';
import Card from './Card';
import styles from './ErrorModal.module.css';

const Backdrop = (props) => {
  return (<div className={styles.backdrop} onClick={props.onConfirm}></div>);
}

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        {props.message}
      </div>
      <footer className={styles.actions}>
        <button onClick={props.onConfirm}>confirm</button>
      </footer>
    </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop 
          onConfirm={props.onConfirm}/>,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}/>,
        document.getElementById('overlay-root')
      )}
    </>
  )
}

export default ErrorModal;