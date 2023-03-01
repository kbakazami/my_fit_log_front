import React from 'react'
import {Link} from "react-router-dom";


export default function Navbar() {

        return (
            <nav className={"flex flex-col text-white justify-between h-screen bg-primary pl-5 py-10 w-[200px]"}>
                <div>
                    <Link to="/dashboard">
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
                    Login
                </div>
            </nav>
        )
}