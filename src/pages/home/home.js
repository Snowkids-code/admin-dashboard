import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return <div className="home">
      <Sidebar/>
      <div className="home_container">
        <Navbar/>
        Home
      </div>
  </div>;
};

export default Home;
