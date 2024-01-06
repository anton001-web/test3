import React from "react";
import { LinkedInIco } from "../LinkedInIco";
import { InstIco } from "../InstIco";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-body">
          <h1 className="footer-title">Contacts</h1>
          <span className="footer-subTitle">
            Want to know more or just communicate <br />
            You are welcome!
          </span>
          <a className="footer-btn" href="tel:+79019931215">
            Phone me !
          </a>
          <div className="footer-socialM__list">
            <a
              className="footer-socialM__list-item"
              href="https://www.instagram.com/yanaapon.art/"
              target="_blank"
            >
              <InstIco />
            </a>
            <a
              className="footer-socialM__list-item"
              href="https://vk.com/plutoart_laboratory"
              target="_blank"
            >
              <LinkedInIco />
            </a>
          </div>
          <p className="footer-underSM__text">
            Follow me on Instagram and Vkontakte
          </p>
        </div>
      </div>
    </footer>
  );
};
