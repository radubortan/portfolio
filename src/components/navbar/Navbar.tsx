import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
    </div>
  );
};

export default Navbar;
