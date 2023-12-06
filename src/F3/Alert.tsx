interface Props {
  onClose: () => void;
}

const Alert = ({ onClose }: Props) => {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;


// import { useState } from "react";
// import Alert from "./F1/component/Alert";
// import Button from "./F1/component/Button";

// function App() {
//   const [alert, setAlert] = useState(false);

//   return (
//     <>
//       {alert && <Alert onClose={() => setAlert(!alert)}></Alert>}
//       <Button onClick={() => setAlert(true)}>Click Me</Button>
//     </>
//   );
// }

// export default App;

