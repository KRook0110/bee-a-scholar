import { useNavigate } from "react-router-dom";

// If u render this element, it will instantly redirect it to the specified link

interface Props {
    url: string,
}

function Redirect({url}:Props) {
    const navigate = useNavigate();
    navigate(url);
    return (<></>);
}

export default Redirect;
