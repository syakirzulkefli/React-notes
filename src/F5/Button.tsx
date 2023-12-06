interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      My Button
    </button>
  );
};

export default Button;
