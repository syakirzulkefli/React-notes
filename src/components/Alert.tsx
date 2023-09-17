import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClosed: () => void;
}

const Alert = ({ children, onClosed }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible ">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClosed}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
