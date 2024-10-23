import React, { useState } from "react";
import RR from "./RReyes.jpg";
import TW from "./TWilliams.jpg";
import RW from "./RWoods.jpg";
import "./Header.css"; // импортируем стили

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (!isMenuOpen) {
      // Если меню открывается, анимируем элементы с задержкой
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element, index) => {
        element.style.transitionDelay = `${index * 0.3}s`;
        element.classList.add("open");
      });
    } else {
      // Если меню закрывается, убираем анимацию
      const elements = document.querySelectorAll(".fade-in");
      elements.forEach((element) => {
        element.classList.remove("open");
      });
    }
  };

  return (
    <header className="header">
      <div
        className={`burger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
      <div className={`overlay ${isMenuOpen ? "active" : ""}`}></div>
      <nav className={`menu ${isMenuOpen ? "open" : ""}`}>
        <div className="close-button" onClick={toggleMenu}>
          &times;
        </div>
        <div className="Burgers fade-in">
          <div className="Title fade-in">
            Fluid is a clean and minimal coming Soon template with super cool
            CSS3 Animations. Fluid comes with different styles and variations to
            choose from.
          </div>
          <div className="Desc fade-in">
            <div className="desc1 fade-in">
              Distinctively generate top-line schemas and fully researched
              "outside the box" thinking. Energistically iterate open-source
              functionalities vis-a-vis bleeding-edge experiences. Globally
              enable frictionless portals before performance based
              methodologies.
            </div>
            <div className="desc2 fade-in">
              Globally parallel task end-to-end infomediaries vis-a-vis
              e-business initiatives. Compellingly cultivate enterprise-wide
              markets whereas high-quality outsourcing. Conveniently
              conceptualize ubiquitous paradigms with front-end alignments.
            </div>
          </div>
          <div className="Fotos fade-in">
            <div className="F-Title fade-in">Our Team</div>
            <div className="F-Desc fade-in">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac
              venenatis est. Ut ut elit in elit imperdiet consectetur sit amet
              eu tellus.
            </div>
            <div className="R-Foto fade-in">
              <div className="R-Container fade-in">
                <div className="R-Img">
                  <img src={RR} alt="Ronald Reyes" />
                </div>
                <div className="R-Name">Ronald Reyes</div>
                <div className="R-S">Co-Founder and CEO</div>
              </div>
              <div className="R-Container fade-in">
                <div className="R-Img">
                  <img src={TW} alt="Teresa Williams" />
                </div>
                <div className="R-Name">Teresa Williams</div>
                <div className="R-S">Co-Founder</div>
              </div>
              <div className="R-Container fade-in">
                <div className="R-Img">
                  <img src={RW} alt="Ryan Woods" />
                </div>
                <div className="R-Name">Ryan Woods</div>
                <div className="R-S">Lead Developer</div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
