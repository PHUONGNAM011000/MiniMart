import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    zIndex: '2000',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modal: {
    position: 'fixed',
    top: '9vh',
    left: '17%',
    width: '70vw',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    zIndex: '3000',
    animation: 'slide-down 300ms ease-out forwards;',

    '@media screen and (max-width: 800px)': {
      width: '290px',
      left: '17%',
    },

    '@media screen and (min-width: 500px)': {
      width: '290px',
      left: '30%',
    },

    '@media screen and (min-width: 800px)': {
      width: '550px',
      left: '22%',
    },

    '@media screen and (min-width: 1200px)': {
      width: '550px',
      left: '32%',
    },
  },
}));

const Backdrop = (props) => {
  const classes = useStyles();
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;