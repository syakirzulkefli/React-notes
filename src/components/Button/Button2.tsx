interface Props{
  children: string;
  color?: "primary" | "success" | "info";
  onClick: () => void;
}

const Button2 = ( {children, onClick, color="primary"} : Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button2