function About(){
    const skills = [
        "HTML",
        "CSS",
        "React",
        "Node",
        "Git",
        "Python",
        "Javascript",
        "Typescript",
        "Linux",
        "Express",
        "Beautifulsoup",
        "Bootstrap",
      ];
    return(
        <>
        <div className="center" id="about">
            <h1>ABOUT ME</h1>
            <hr />
            <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
        </div>
        <div className="container about">
            <div id="getToKnowMe">
                <h3>Get to know me!</h3>
                <p>As a fullstack web developer with a focus on frontend development, I design and develop engaging interfaces for websites and web applications that drive user adoption and contribute to the overall success of the product. Check out my projects section for examples of my work.

                In addition to my development skills, I'm also passionate about sharing my knowledge with the web development community. Follow me on LinkedIn to stay up-to-date with my latest posts on web development and programming.

                I'm currently seeking new job opportunities where I can contribute my skills and continue to learn and grow. If you have an opportunity that matches my experience and skill set, don't hesitate to contact me.
                </p>
                <button onClick={()=>window.location.href ="#contact"}>Contact</button>
            </div>
            <div>
                <h1>My Skills</h1>
                    {skills.map((skill) => (
                        <div key={skill}>{skill}</div>
                    ))}
            </div>
        </div>
    </>
    )
}
export default About