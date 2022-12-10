import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";
import './App.css';

function App() {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => setOpenAlert(true);

  const handleClose = () => setOpenAlert(false);

  return (
    <div className="App">
      <Button
        onClick={handleOpen}
        disabled={false}
        color={"primary"}
        size={"big"}
      >
        Click me!
      </Button>

      {isOpenAlert && (
        <Alert color="primary" onClose={handleClose}>
          Let's play chess!
        </Alert>
      )}
    </div>
  );
}

export default App;
