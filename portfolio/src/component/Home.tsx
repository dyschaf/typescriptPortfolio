import Navbar from './Nav_page';
import GreetMe from './GreetMe';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
function Home(){
    return(
        <div id='home'>
            {/* <Navbar/> */}
            <GreetMe/>
            
            <About/>
            <Projects/>
            <Contact />
        </div>
    )
}
export default Home