import React from "react";
import "./Footer.css";
import chit from "../img/chit.svg";
import vk from "../img/vk.svg";
import tlg from "../img/tlg.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer__box">
          <div className="footer__box_content">
            <div className="footer__box_icon">
              <a href="#">
                <img className="footer_icon" src={chit} alt="" />
              </a>
              <a href="#">
                <img className="footer_icon" src={vk} alt="" />
              </a>
              <a href="#">
                <img className="footer_icon" src={tlg} alt="" />
              </a>
            </div>
            <div className="footer__box_title">
              © ООО «Корпорация Хлебопёк» Все права защищены 2022
              <a href="#">Правила пользования сайтом ©</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
