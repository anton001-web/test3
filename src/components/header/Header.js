import React, { useEffect, useState } from "react";
import { HeaderLink } from "./HeaderLink";
import { useDispatch, useSelector } from "react-redux";
import { themeChange } from "../../store/actions";
import { ThemeIco } from "../ThemeIco";

const headerLinks = [
  { link: "Home", href: "#" },
  { link: "About me", href: "#about_sec" },
  { link: "Qualities", href: "#qualities" },
  { link: "Works", href: "#works" },
  { link: "Contacts", href: "#footer" },
];

export const Header = () => {
  const dispatch = useDispatch();
  const { burger, theme } = useSelector((state) => state);
  const [headerSticky, setHeaderSticky] = useState(false);

  document.addEventListener("scroll", (e) => {
    if (window.scrollY > 150) {
      setHeaderSticky(true);
    } else {
      setHeaderSticky(false);
    }
  });

  const themeToggle = () => {
    dispatch(themeChange());
  };

  useEffect(() => {
    document.body.dataset.theme = theme.theme;
  }, [theme]);

  return (
    <header className="header" data-sticky={headerSticky}>
      <div className="container">
        <div className="header-body">
          <div
            data-open={burger.visibility}
            className="header-links__list-wrap"
          >
            <ul className="header-links__list">
              {headerLinks.map((item, ind) => (
                <HeaderLink key={ind} link={item} />
              ))}
            </ul>
            <div className="header-burger__theme-changer" onClick={themeToggle}>
              {theme.theme === "dark" ? (
                <ThemeIco theme="dark" />
              ) : (
                <ThemeIco theme="light" />
              )}{" "}
              {theme.theme} mode
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
