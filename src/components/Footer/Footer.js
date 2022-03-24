import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.footerLabel}>The Besoin Lab 2022 &copy; Powered by Flatlogic. Fabriqué à la main et avec</span>
      <FooterIcon />
    </div>
  )
}

export default Footer;
