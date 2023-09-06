import { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

interface Props{
    onClick: () => void;
}

const Like = ({onClick}:Props) => {
    const [status, setStatus] = useState(true); //state variable

    const toggle = () => {
        setStatus(!status);
        onClick();
    }

    if (status) return (<AiOutlineHeart color='ff6b81' size={30} onClick={toggle}/>)
    return(<AiFillHeart  color='ff6b81' size={30} onClick = {toggle}/>)
}

export default Like

// 1. First render a heart icon
// 2. Declare a state variable to determine of the heart should be full or empty.
// 3. Create interface Props
