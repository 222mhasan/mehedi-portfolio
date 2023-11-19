import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import About from '../About/About'
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <div className="border ">
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;