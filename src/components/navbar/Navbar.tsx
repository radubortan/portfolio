import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
      <p>Radu Bortan</p>
    </div>
  );
};

export default Navbar;
