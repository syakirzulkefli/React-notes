interface Props {
  children: string;
  color?: "primary" | "danger" | "info";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

// import Button from "./F1/component/Button";

// function App() {

//   return <Button onClick={() => console.log("Clicked")}>Click Me</Button>;
// }

// export default App;
