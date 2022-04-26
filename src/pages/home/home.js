import Chart from "../../components/chart/chart";
import Featured from "../../components/featured/featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widget/widget";
import "./home.scss";

const Home = () => {
  return <div className="home">
      <Sidebar/>
      <div className="home_container">
        <Navbar/>
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className="charts">
          <Featured/>
          <Chart/>
        </div>
      </div>
  </div>;
};

export default Home;
