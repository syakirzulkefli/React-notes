import { useState } from "react";
import Alert2 from "./components/Button/Alert2";
import Button2 from "./components/Button/Button1";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      {alertVisible === true && (
        <Alert2 onClose={() => setAlertVisibility(false)}>Please Close</Alert2>
      )}
      <Button2 color="success" onClick={() => setAlertVisibility(true)}>
        Button
      </Button2>
    </>
  );
}

export default App;
