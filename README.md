## React Modal

# Example
```
 <Modal
   displayModal={displayModal}
   closeModalFunction={() => setDisplayModal(false)}
   headerContent={'Header'}
   mainContent={<div>Testing this</div>}
   footerContent={<button>Button</button>}
 />
```

# Usage
```
function App() {
  const [displayModal, setDisplayModal] = useState(false);

  return (
    <div className="App">
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