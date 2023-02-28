import React from 'react'

export default function Link(props) {

    return (
        <li>
            <a  className={`text-${props.textColor} || text-white` }
                href={props.url}>{props.name}</a>
        </li>
    )
}