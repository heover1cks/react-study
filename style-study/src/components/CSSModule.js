import React from "react";
import styles from "../styles/CSSModule.module.scss";
const CSSModule = () => {
  return (
    <div className={[styles.wrapper, styles.inverted].join(" ")}>
      Hello,I am <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;
