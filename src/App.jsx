import LayoutDashboard from "./Layout/LayoutDashboard/LayoutDashboard.jsx";
import LayoutHome from "./Layout/LayoutHome/LayoutHome.jsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "./Services/auth.service.js";

function App() {

    const [currentUser, setCurrentUser] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {

        const user = AuthService.getCurrentUser();
        console.log(user);

        if (user){
            setCurrentUser(user);
        }

    }, [])

    if(currentUser){
        return (
            <>
                <div className={"app"}>
                    <LayoutDashboard />
                </div>
            </>
        )
    }else{
        return (
            <>
                <div className={"app"}>
                    <LayoutHome />
                </div>
            </>
        )
    }

}



export default App
