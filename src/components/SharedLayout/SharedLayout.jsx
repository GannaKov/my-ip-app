import styles from "./SharedLayout.module.css";
import logo from "../../assets/images/brand-7833518_640.png";
const SharedLayout = () => {
  return (
    <div className={styles.headerWrp}>
      <header className={styles.header}>
        <img className={styles.headerLogo} src={logo} alt="logo" />
        <h1 className={styles.headerTitle}>Your IP and Country Info</h1>
      </header>
    </div>
  );
};

export default SharedLayout;
