import Datatable from "../../components/datatable/datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.scss";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="list_container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default List;
