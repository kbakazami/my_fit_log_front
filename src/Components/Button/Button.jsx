import Link from "../Link/Link.jsx";

export default function Button(props){
    return(
        <button className={"bg-primary p-2 rounded"}>
            <Link url={"#"} textColor={"white"} name={props.name} />
        </button>
    )
}