import React from 'react'
import {Link, redirect} from "react-router-dom";
import Button from "../Button/Button.jsx";
import AuthService from "../../Services/auth.service.js";


export default function Navbar() {
        const logout = () => {
            AuthService.logout();
            return redirect("/");
        }

        return (
            <nav className={"flex flex-col text-white justify-between h-screen bg-primary pl-5 py-10 w-[200px]"}>
                <div>
                    <Link to="/">
                        Logo
                    </Link>
                </div>
                <ul>
                    <li>
                        <Link to={"/alimentation"}>
                            Alimentation
                        </Link>
                    </li>
                    <li>
                        <Link to={"/glycemie"}>
                            Glycémie
                        </Link>
                    </li>
                </ul>
                <div>
                    <button onClick={logout} className={"bg-primary text-white p-2 hover:bg-white hover:text-primary rounded"}>
                        Logout
                    </button>
                </div>
            </nav>
        )
}