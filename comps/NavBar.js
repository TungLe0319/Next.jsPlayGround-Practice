import React from "react";
import styles from "../styles/Home.module.css";
const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className="">
        <h1>Next.PlayGround</h1>
      </div>
      <div className=" flex ">
        <a href="">Home</a>
        <a className="mx-2" href="">
          About
        </a>
        <a href="">Skills</a>
        <a className="" href="">
          Portfolio
        </a>
        <a href="">Contact</a>
      </div>
    </nav>
  );
};

export default NavBar;
