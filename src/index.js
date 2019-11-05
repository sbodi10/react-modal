import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

function Modal (props) {
  const { displayModal, closeModalFunction, closeIcon, headerContent, mainContent, footerContent } = props;
  const selectablesQuery = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]),[role="button"], [tabindex="0"]';

  useEffect(function () {
    document.addEventListener('keydown', function (e) {
      const modalContainer = document.querySelector('.modal-container');
      if (modalContainer == null) {
        return;
      }
      const focusableEls = Array.prototype.slice.call(modalContainer.querySelectorAll(selectablesQuery));
      switch (e.keyCode) {
        // Tab
        case 9:
          // If there's only one element in the modal that's focusable, disable tabbing
          if (modalContainer.querySelectorAll(selectablesQuery).length === 1) {
            e.preventDefault();
            break;
          }
          // Tabbing backwards
          if (e.shiftKey) {
            if (document.activeElement === focusableEls[0]) {
              e.preventDefault();
              focusableEls[0].focus();
            }
          } else {
            // Wrap around to the beginning if we've hit the last focusable element in the modal
            if (document.activeElement == focusableEls[focusableEls.length - 1]) {
              e.preventDefault();
              focusableEls[0].focus();
            }
          }
          break;
        default:
          break;
      }
    });
  }, []);

  // Focus on a modal when it's displayed
  useEffect(() => {
    if (displayModal) {
      const modalContainer = document.querySelector('#modal-container');
      const focusableEls = Array.prototype.slice.call(modalContainer.querySelectorAll(selectablesQuery));
      focusableEls[0].focus();
    }
  });

  if (displayModal) {
    return (
      <React.Fragment>
        <div id='modal-container' className={styles['modal-container']} role='dialog' aria-labelledby='header' aria-describedby='modal-content'>
          <header>
            <h2 id='header'>{headerContent}</h2>
            {closeIcon ? <img className={styles['close-modal-button']} src={closeIcon} onClick={closeModalFunction} role='button' tabIndex='1' alt='close icon' /> : null}
          </header>
          <main id='modal-content' className={styles['modal-content']}>{mainContent}</main>
          <footer className={styles['modal-footer']}>{footerContent}</footer>
        </div>
        <div className={styles['modal-overlay']}></div>
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
