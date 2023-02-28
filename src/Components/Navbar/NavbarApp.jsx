import React from 'react'
import Link from './Link/Link'

export default function NavbarHome() {

    return (

        <nav className="flex text-white flex-col justify-between w-[200px] h-screen bg-primary pl-6 py-10">
            <div>
                Logo
            </div>
            <ul className="flex flex-col text-xl">
                <Link url="/link01" name="Link 01"/>
                <Link url="/link02" name="Link 02"/>
                <Link url="/link03" name="Link 03"/>
            </ul>
            <div>
                Login
            </div>
        </nav>

    )
}