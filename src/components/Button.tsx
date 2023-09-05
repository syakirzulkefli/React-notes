import { ReactNode } from "react";

interface Props{
    children: ReactNode;
    color?: 'primary' | 'secondary' | 'success'; // | is union operator
    onClick: () => void; 
}

const Button = ({children, onClick, color='primary'} : Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button