import React, { useState, useEffect } from "react";

import "./Header.scss";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    expand();
  }, [toggle]);

  const headerToggle = async event => {
    event.preventDefault();
    await setToggle(!toggle);
  };

  const expand = () => {
    if (toggle) {
      const header = document.querySelector(".header");
      header.setAttribute(
        "style",
        "position: fixed; height: 100vh; width: 100vw; top:0; bottom:0; left:0; right: 0;"
      );
      document.getElementById("wowcb").checked = true;
    } else {
      const header = document.querySelector(".header");
      header.removeAttribute("style");
      document.getElementById("wowcb").checked = false;
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">Logo</div>
        <div className="header__menu" onClick={headerToggle}>
          <input type="checkbox" id="wowcb" />
          <label className="toggle" htmlFor="wowcb">
            <div>
              <div>
                <span></span>
                <span></span>
              </div>
              <svg>
                <use xlinkHref="#path" />
              </svg>
              <svg>
                <use xlinkHref="#path" />
              </svg>
            </div>
          </label>

          <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
            <symbol
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 44 44"
              id="path"
            >
              <path d="M22,22 L2,22 C2,11 11,2 22,2 C33,2 42,11 42,22"></path>
            </symbol>
          </svg>
        </div>
      </div>
    </header>
  );
}
