# @sbodi/react-modal

Modal component built using hooks for ReactJS

![version](https://img.shields.io/badge/version-1.1.3-blue)

## Installation

To install, run the below command
```
$ npm install @sbodi/react-modal
```

## Example
```jsx
 <Modal
   displayModal={displayModal}
   closeModalFunction={() => setDisplayModal(false)}
   headerContent={'Header'}
   mainContent={<div>Testing this</div>}
   footerContent={<button>Button</button>}
 />
```

## Usage
```jsx
import React, { useState } from 'react';
import Modal from '@sbodi/react-modal';

function App() {
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
```