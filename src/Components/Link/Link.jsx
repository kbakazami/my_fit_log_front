import React from 'react'

export default function Link(props) {

    return (
        <a className={`text-${props.textColor} || text-white`} href={props.url}>
            {props.children}
        </a>
    )
}