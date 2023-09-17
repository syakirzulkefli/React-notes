import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setalertVisible] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClosed={() => setalertVisible(false)}>Warning</Alert>
      )}
      <Button color="danger" onClick={() => setalertVisible(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
