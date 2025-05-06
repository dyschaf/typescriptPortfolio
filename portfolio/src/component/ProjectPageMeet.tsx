function ProjectPageMeet(props:any){
    // console.log(props)
    return(
        <div id="greetMe">
            <h1>{props.title}</h1>
            <p>{props.ProjectPageMeetDescription}</p>
            <button onClick={()=> window.open(props.projectLink)}>PROJECT GITHUB LINK</button>
        </div>
    )
}
export default ProjectPageMeet