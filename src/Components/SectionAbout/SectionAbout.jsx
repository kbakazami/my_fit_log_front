export default function SectionAbout(props){
    return(
        <div className={"w-4/5 mx-auto mb-6 lg:mb-4"}>
            <div className={"flex flex-col lg:flex-row justify-center gap-x-2 items-center text-center lg:text-left"}>
                <img src={props.img} alt={props.alt} className={"h-10 w-10"} />
                <p className={"mt-2"}>
                    {props.children}
                </p>
            </div>
        </div>
    )
}