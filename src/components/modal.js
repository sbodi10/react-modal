import React from 'react';
import PropTypes from 'prop-types';

function Modal (props) {
  const { displayModal, closeModalFunction, closeIcon, headerContent, mainContent, footerContent } = props;

  if (displayModal) {
    return (
      <React.Fragment>
        <div className={'modal-container'} role='dialog' aria-labelledby='header' aria-describedby='modal-content'>
          <header>
            <h2 id='header'>{headerContent}</h2>
            {closeIcon ? <img className='close-modal-button' src={closeIcon} onClick={closeModalFunction} tabIndex='1' alt='close icon' /> : null}
          </header>
          <main id='modal-content' className='modal-content'>{mainContent}</main>
          <footer className='modal-footer'>{footerContent}</footer>
        </div>
        <div className='modal-overlay'></div>
      </React.Fragment>
    );
  }

  return null;
}

Modal.propTypes = {
  displayModal: PropTypes.bool.isRequired,
  closeModalFunction: PropTypes.func.isRequired,
  closeIcon: PropTypes.func,
  headerContent: PropTypes.node,
  mainContent: PropTypes.node,
  footerContent: PropTypes.node
};

export default Modal;
