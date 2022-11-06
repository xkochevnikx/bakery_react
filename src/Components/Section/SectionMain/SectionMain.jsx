import React from "react";
import "./SectionMain.css";
import wheat from "../../img/wheat.svg";
import bakery_female from "../../img/bakery_female.png";
import milk from "../../img/milk.jpg";
import eggs from "../../img/eggs.jpg";
import flour from "../../img/flour.jpg";
import bakery_man from "../../img/bakery_man.png";
import icon_1 from "../../img/icon_1.svg";
import icon_2 from "../../img/icon_2.svg";
import icon_3 from "../../img/icon_3.svg";

const SectionMain = () => {
  return (
    <>
      <section>
        <div className="section__one_box">
          <div className="section__one">
            <div className="section__one_text_kolosok">
              <img id="kolosok" src={wheat} alt="" />
              <div className="section__one_text">
                <h1>Мы стараемся,</h1>
                <p>
                  чтобы каждый человек <br />
                  чувствовал себя как дома
                </p>
                <a id="section_link" href="#">
                  о пекарне -->
                </a>
              </div>
            </div>
            <div className="section__one_female">
              <img id="female" src={bakery_female} alt="" />
            </div>
          </div>

          <div className="section__two">
            <div className="section__two_box1">
              <img src={wheat} alt="" />
              <p>
                Продукция в наших пекарнях готовится исключительно из
                натуральных продуктов
              </p>
            </div>
            <div className="section__two_box2">
              <div className="section__two_box2_title">
                <h2>Натуральное молоко</h2>
                <p>
                  Для наших изделий мы используем чистое, натуральное молоко,
                  богатое кальцием и минералами, без антибиотиков и
                  консервантов. Поставщики – местные фермеры.
                </p>
              </div>
              <img src={milk} alt="" />
            </div>
            <div className="section__two_box3">
              <img src={eggs} alt="" />
              <div className="section__two_box3_title">
                <h2>Яйца первой категории</h2>
                <p>
                  Мы берем яйца для выпечки только первой категории. Получаем от
                  несушек, которые питаются экологически чистыми кормами,
                  содержащими витамины и минеральные добавки.
                </p>
              </div>
            </div>
            <div className="section__two_box4">
              <div className="section__two_box4_title">
                <h2>Мука высшего сорта</h2>
                <p>
                  Мы используем муку, приготовленную только из зерна высшего
                  класса. Это позволяет ей отличаться превосходными
                  хлебопекарными качествами.
                </p>
              </div>
              <img src={flour} alt="" />
            </div>
          </div>
          <div className="section__three">
            <div className="section__three_box">
              <div className="section__three_text">
                <h2>
                  Мы всегда следим за тем, чтобы качество нашей продукции было
                  на высоте.
                </h2>
                <p>
                  Мы предлагаем только свежую и качественную продукцию, которую
                  любят взрослые и дети. Пекарня Хлебница — это аромат
                  свежеиспеченного хлеба, домашняя пышная выпечка, хрустящие
                  багеты и вкуснейшие пироги, пекарь в белоснежном колпаке и
                  довольные счастливые покупатели. Мы открываемся рано утром и
                  работаем до позднего вечера для того, чтобы Вы могли
                  приобрести только свежий хлеб и выпечку.
                </p>
                <a id="link3" href="#">
                  Узнать больше -->{" "}
                </a>
              </div>
              <div className="section__three_img">
                <img src={bakery_man} alt="" />
              </div>
            </div>
            <div className="section__three_link">
              <div className="item_box">
                <img className="icon_1" src={icon_1} alt="" />
                {/* <span className="material-symbols-outlined"> flatware </span> */}
                <div className="item_box_text">
                  <h3>Что мы печём?</h3>
                  <a href="#">Узнать больше --> </a>
                </div>
              </div>
              <div className="item_box">
                <img src={icon_2} alt="" />
                {/* <span className="material-symbols-outlined"> add_location_alt </span> */}
                <div className="item_box_text">
                  <h3>Где купить?</h3>
                  <a href="#">Найти магазины --></a>
                </div>
              </div>
              <div className="item_box">
                <img src={icon_3} alt="" />
                {/* <span className="material-symbols-outlined"> cases </span> */}
                <div className="item_box_text">
                  <h3>Работать с нами</h3>
                  <a href="#">Вакансии --> </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionMain;
