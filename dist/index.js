'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".styles_modal-container__hzlxY {\n  animation-name: styles_appearIn__1CjC2;\n  animation-duration: 0.5s;\n  animation-delay: 0s;\n\n  background-color: white;\n  border: 1px solid #c3d2df;\n  border-radius: 4px;\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),\n    0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n\n  display: flex;\n  flex-direction: column;\n\n  padding: 1.5rem;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 378px;\n  max-height: 90%;\n  width: 550px;\n  max-width: 90%;\n  z-index: 100;\n}\n\n.styles_modal-container__hzlxY header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.styles_modal-container__hzlxY h2 {\n  font-weight: 500;\n  font-size: 1.3125rem;\n}\n\n.styles_close-modal-button__38yYq {\n  cursor: pointer;\n  padding: 0px 5px;\n}\n\n.styles_modal-container__hzlxY main {\n  overflow: scroll;\n  margin: 15px 0px;\n  flex: 1 0 auto;\n}\n\n.styles_modal-container__hzlxY footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n\n.styles_modal-container__hzlxY button {\n  font-size: 18px;\n  text-transform: capitalize;\n  font-weight: 400;\n}\n\n.styles_modal-container__hzlxY textarea {\n  font-size: 14px;\n  color: #2a3d4c;\n  border: 1px solid #c3d2df;\n  border-radius: 2px;\n  padding: 0.5rem;\n  align-content: center;\n}\n\n@keyframes styles_appearIn__1CjC2 {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.styles_modal-overlay__3EZOv {\n  background-color: white;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 95;\n}\n";
var styles = {"modal-container":"styles_modal-container__hzlxY","appearIn":"styles_appearIn__1CjC2","close-modal-button":"styles_close-modal-button__38yYq","modal-overlay":"styles_modal-overlay__3EZOv"};
styleInject(css);

function Modal(props) {
  var displayModal = props.displayModal,
      closeModalFunction = props.closeModalFunction,
      closeIcon = props.closeIcon,
      headerContent = props.headerContent,
      mainContent = props.mainContent,
      footerContent = props.footerContent;
  var selectablesQuery = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]),[role="button"], [tabindex="0"]';
  React.useEffect(function () {
    document.addEventListener('keydown', function (e) {
      var modalContainer = document.querySelector('.modal-container');

      if (modalContainer == null) {
        return;
      }

      var focusableEls = Array.prototype.slice.call(modalContainer.querySelectorAll(selectablesQuery));

      switch (e.keyCode) {
        // Tab
        case 9:
          // If there's only one element in the modal that's focusable, disable tabbing
          if (modalContainer.querySelectorAll(selectablesQuery).length === 1) {
            e.preventDefault();
            break;
          } // Tabbing backwards


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
      }
    });
  }, []); // Focus on a modal when it's displayed

  React.useEffect(function () {
    if (displayModal) {
      var modalContainer = document.querySelector('#modal-container');
      var focusableEls = Array.prototype.slice.call(modalContainer.querySelectorAll(selectablesQuery));
      focusableEls[0].focus();
    }
  });

  if (displayModal) {
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
      id: "modal-container",
      className: styles['modal-container'],
      role: "dialog",
      "aria-labelledby": "header",
      "aria-describedby": "modal-content"
    }, React__default.createElement("header", null, React__default.createElement("h2", {
      id: "header"
    }, headerContent), closeIcon ? React__default.createElement("img", {
      className: styles['close-modal-button'],
      src: closeIcon,
      onClick: closeModalFunction,
      role: "button",
      tabIndex: "1",
      alt: "close icon"
    }) : null), React__default.createElement("main", {
      id: "modal-content",
      className: styles['modal-content']
    }, mainContent), React__default.createElement("footer", {
      className: styles['modal-footer']
    }, footerContent)), React__default.createElement("div", {
      className: styles['modal-overlay']
    }));
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

module.exports = Modal;
//# sourceMappingURL=index.js.map
