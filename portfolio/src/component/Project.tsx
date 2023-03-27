import React from 'react';

function Project(props: any) {
    console.log(props.id)
    const backSlashUrl=props.title.replaceAll(' ',"-")
    console.log(backSlashUrl)
  return (
    
    <div className="container projects" id={`project-${props.id}`}>
        
      <div>
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div className='infoProjects'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button id={`projectBtn-${props.id}`} onClick={()=>{window.open(backSlashUrl,"_blank")}}>SEE PROJECT</button>
      </div>
    </div>
  );
}
export default Project  
