function Footer(){
    return(
        <>
        <br />
        <div className="footer">
            <br />
            <div className="footContainer">
            <div >
                <h3>DOVID SCHAFFEL</h3>
                <p className="footertext">I build engaging frontend interfaces and backend servers for websites and web applications that drive user adoption and contribute to overall product success as a fullstack developer with a frontend focus.</p>
            </div>
            <div>
                <h3>SOCIAL</h3>
                <div className="main-footer__social-cont">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dovid-schaffel/">
                    <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/7f29579dde49e02480372aa49f7189c5536b0118/34b92/assets/png/linkedin-ico.png" alt="Dovid Schaffel Linkedin Profile"/>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/dyschaf">
                    <img className="main-footer__icon" src="https://d33wubrfki0l68.cloudfront.net/5557d5a11584d7201a38ee1a95200f57a4cc0f88/15085/assets/png/github-ico.png" alt="Dovid Schaffel Github Profile"/>
                    </a>
                </div>
            </div>
            <hr />
            </div>
            <small className="footerCenter">© Copyright 2023. Made by <a href="/">Dovid Schaffel</a></small>
        </div>
        </>
    )
}
export default Footer