import {Link} from "react-router-dom"

export default function Button(props){
    return(
        <button className={"bg-primary p-2 rounded"}>
            <Link to={props.path}>
                {props.name}
            </Link>
        </button>
    )
}