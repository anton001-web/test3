import React from "react";
import s from "./styles.module.scss";

const imgs = [
  {
    img: "../assets/images/galleryImages/1.jpg",
    title: "Техно Монстр",
  },
  {
    img: "../assets/images/galleryImages/2.jpg",
    title: "Crying Chaos",
  },
  {
    img: "../assets/images/galleryImages/3.jpg",
    title: "Babushka Flint",
  },
  {
    img: "../assets/images/galleryImages/4.jpg",
    title: "Self-Portrait in the Bloody Rain",
  },
  {
    img: "../assets/images/galleryImages/5.jpg",
    title: "The portrait of Hippocampus",
  },
  {
    img: "../assets/images/galleryImages/6.jpg",
    title: "Косморыба",
  },
];

export const Gallery = () => {
  return (
    <section className={s.gallery_section} id="works">
      <div className="container">
        <div className={s.gallery_section_body}>
          <h1 className={s.gallery_section_title}>My works</h1>
          <div className={s.gallery_list}>
            {imgs.map((item, ind) => (
              <div
                className={s.gallery_list_item}
                key={ind}
                onClick={() =>
                  window.open("https://vk.com/market-143171651", "_blank")
                }
              >
                <img src={item.img} className={s.gallery_list_item_img} />
                <div className={s.hover_card_el}>
                  <span className={s.hover_card_el_text}>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
