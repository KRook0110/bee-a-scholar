import LoginSubpage from "@pages/Login-page/LoginSubpage";
import RegisterSubpage from "@pages/Login-page/RegisterSubpage";
import { useState } from "react";


function Loginpage() {


    const [subpageIdx, setSubpageIdx] = useState(0);
    const subpages = [
        <LoginSubpage />,
        <RegisterSubpage />
    ];

    return (<>
        <div>

        </div>
    </>);
}

export default Loginpage;
