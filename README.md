# @sbodi/react-modal

> A modal created using react for react

[![NPM](https://img.shields.io/npm/v/@sbodi/react-modal.svg)](https://www.npmjs.com/package/@sbodi/react-modal) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![GitHub forks](https://img.shields.io/github/forks/sbodi10/react-modal?style=social)

## Prerequisites

Before you begin, ensure you have met the following requirements:
* You have installed React with a version that supports hooks

## Install

```bash
npm install --save @sbodi/react-modal
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

## Contributors

Thanks to the following people who have contributed to this project:

* [@roseg43](https://github.com/roseg43)

## License

MIT © [sbodi10](https://github.com/sbodi10)
