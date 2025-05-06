import ProjectPageMeet from "./ProjectPageMeet"
function ProjectPage(props:any){
    console.log(props.title)
    return(
        <>
        <ProjectPageMeet {...props}/>
        <div className=" projectContainer">
            <br />
            <div className="center">
                <img className="ProjectPageIMG" src={props.imgSrc} alt={props.title} />
            </div>
            <br />
            <div className="left">
                <h1>Project Overview</h1>
                <p>{props.projectsDescription}</p>
            </div>
            <br />
            <div className="blue">
                <h1>Tools Used</h1>
                {props.skillsUsed.map((skill:string) => (
                        <div key={skill}>{skill}</div>
                    ))}
            </div>
            <br />
            <div>
                
                {props.liveLink && (
                    <>
                    <h1>See Live</h1>
                    <button onClick={() => window.open(props.liveLink)}>PROJECT LIVE LINK</button>
                    </>
                )}
                <button onClick={()=>window.location.href ="/"}>GO BACK</button>
            </div>
        </div>
        
        </>
    )

}
export default ProjectPage