import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import About from '../About/About'

const Home = () => {
    return (
        <div className="border ">
            <Header></Header>
            <Banner></Banner>
            <Projects></Projects>
            <About></About>
        </div>
    );
};

export default Home;