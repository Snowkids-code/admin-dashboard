import {
  AccountCircle,
  CloudCircle,
  CreditCard,
  Dashboard,
  ExitToApp,
  Inventory,
  LocalShipping,
  NotificationsNone,
  PersonOutline,
  Psychology,
  QueryStats,
  Settings,
} from "@mui/icons-material";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Phoenix Developers</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <Dashboard className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PersonOutline className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <Inventory className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <CreditCard className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <QueryStats className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <CloudCircle className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <Psychology className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircle className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToApp className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
          <div className="color_options"></div>
          <div className="color_options"></div>
      </div>
    </div>
  );
};

export default Sidebar;
