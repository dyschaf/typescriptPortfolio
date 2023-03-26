import Navbar from './Navbar';
import GreetMe from './GreetMe';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
function Home(){
    return(
        <>
            
            <GreetMe/>
            <About/>
            <Projects/>
            <Contact />
        </>
    )
}
export default Home