import React, { useState } from 'react';
import Modal from '@sbodi/react-modal';

export default () => {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div>
      <button onClick={() => setDisplayModal(true)}>Open modal</button>
      <Modal
        headerContent={'Header content'}
        mainContent={<textarea rows='8' placeholder={'Enter some text'} />}
        footerContent={
          <React.Fragment>
            <button
              onClick={() => setDisplayModal(false)}
            >Cancel</button>
            <button
              onClick={() => setDisplayModal(false)}
            >Confirm</button>
          </React.Fragment>
        }
        displayModal={displayModal}
        closeModalFunction={() => setDisplayModal(false)}
      />
    </div>
  );
}
