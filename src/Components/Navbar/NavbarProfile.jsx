import React from 'react'
import Link from '../Link/Link'

export default function NavbarProfile() {

    return (

        <nav className="flex text-white flex-col justify-between w-[200px] h-screen bg-primary pl-6 py-10">
            <div>
                <Link url="/">
                    Logo
                </Link>
            </div>
            <ul className="flex flex-col text-xl">
                <Link url="/link01">
                    Link 01
                </Link>
                <Link url="/link02">
                    Link 02
                </Link>
                <Link url="/link03">
                    Link 03
                </Link>
            </ul>
            <div>
                Login
            </div>
        </nav>

    )
}