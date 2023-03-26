import React from 'react';

function Project(props: any) {
    console.log(props.id)
  return (
    
    <div id={`project-${props.id}`}>
        
      <div>
        <img src={props.imgSrc} alt={props.title} />
      </div>
      <div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button id={`projectBtn-${props.id}`}>CASE STUDY</button>
      </div>
    </div>
  );
}
export default Project  
