function GreetMe(){
    return(
        <div id="greetMe">
            <h1>HEY, I'M DOVID SCHAFFEL</h1>
            <p>I build engaging frontend interfaces and backend servers for websites and web applications that drive user adoption and contribute to overall product success as a fullstack developer with a frontend focus.</p>
            <button onClick={()=> window.location.href = "#project"}>PROJECTS</button>
        </div>
    )
}
export default GreetMe