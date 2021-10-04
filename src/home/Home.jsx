import Navbar from "./components/Navbar";
import "./home.scss";
import ken from "../../src/assets/ken.jpg"

const Home = () => {
    return (
        <div className="home">
           <Navbar/>
           <img src={ken} alt="" width="100%"/>
        </div>
    )
}

export default Home
