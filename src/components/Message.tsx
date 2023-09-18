interface Props{
    text: string;
}

let count = 0;

const Message = ({text}: Props) => {
  count++;
  return <div>{text}</div>;
};

export default Message;
