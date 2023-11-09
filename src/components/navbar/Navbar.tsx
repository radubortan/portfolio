import Sidebar from "../sidebar/Sidebar";
import classes from "./navbar.module.scss";
import LanguageSwitch from "../languageSwitch/LanguageSwitch";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <Sidebar />
      <LanguageSwitch />
    </div>
  );
};

export default Navbar;
