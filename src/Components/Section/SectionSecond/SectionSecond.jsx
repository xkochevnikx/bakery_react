import React from "react";
import "./SectionSecond.css";
import control1 from "../../img/control1.jpg";
import control2 from "../../img/control2.webp";
import control3 from "../../img/control3.jpg";
import control4 from "../../img/control4.jpg";
import control5 from "../../img/control5.jpg";
import wheat from "../../img/wheat.svg";

const SectionSecond = () => {
  return (
    <>
      <section>
        <div className="section__control_box">
          <div className="section__control_box_item">
            <img src={control1} alt="" />
            <div className="box_item_text">
              <div className="box_item_img_h2">
                <img className="kolosok_control" src={wheat} alt="" />
                <h2>Внимание к каждой детали</h2>
              </div>

              <p>
                Мы уделяем внимание каждой детали в работе, начиная от закупки
                сырья и заканчивая настроением покупателя. Каждый этап работы
                проходит строгую проверку: только свежие и качественные
                продукты, только современное и первоклассное оборудование,
                только высококвалифицированный персонал и удовлетворенный
                покупатель.
              </p>
            </div>
          </div>
          <div className="section__control_box_item">
            <div className="box_item_text">
              <div className="box_item_img_h2">
                <img className="kolosok_control" src={wheat} alt="" />
                <h2>Качественные ингредиенты</h2>
              </div>
              <p>
                Весь хлеб и выпечка в Хлебнице изготавливаются вручную на основе
                муки из тщательно отобранной пшеницы и содержат только
                натуральные ингредиенты. Мы используем знания и современные
                технологии, чтобы испечь для вас действительно вкусный хлеб и
                выпечку.
              </p>
            </div>
            <img src={control2} alt="" />
          </div>
          <div className="section__control_box_item">
            <img src={control3} alt="" />
            <div className="box_item_text">
              <div className="box_item_img_h2">
                <img className="kolosok_control" src={wheat} alt="" />
                <h2>Любимые клиенты</h2>
              </div>
              <p>
                В наших пекарнях со всем вниманием и заботой относятся к каждому
                клиенту, ведь он — наш Гость. Здесь он встретит дружелюбные
                улыбки наших сотрудников, почувствует уютную атмосферу наших
                пекарен и оценит высокий сервис обслуживания.
              </p>
            </div>
          </div>
          <div className="section__control_box_item">
            <div className="box_item_text">
              <div className="box_item_img_h2">
                <img className="kolosok_control" src={wheat} alt="" />
                <h2>Внимательные сотрудники</h2>
              </div>
              <p>
                Каждый сотрудник заботится о качественном выполнении своей
                работы, внимательно относится к соблюдению стандартов
                производства и продаж, а также старается создать уютную
                атмосферу в наших пекарнях. Наша цель — это довольный и сытый
                покупатель!
              </p>
            </div>
            <img src={control4} alt="" />
          </div>
          <div className="section__control_box_item">
            <img src={control5} alt="" />
            <div className="box_item_text">
              <div className="box_item_img_h2">
                <img className="kolosok_control" src={wheat} alt="" />
                <h2>Прислушиваемся к каждому совету и рекомендации</h2>
              </div>
              <p>
                Мы внимательно относимся к отзывам, советам и рекомендациям,
                которые поступают от наших Гостей и партнёров. Мы всегда
                стараемся решить все возникающие проблемы в короткие сроки, и
                это помогает нам совершенствовать нашу работу и становиться
                лучше.
              </p>
            </div>
          </div>

          <div className="section__control_box_item_last">
            <div className="box_item_img_title">
              <img className="kolosok_control" src={wheat} alt="" />
              <h2>
                Мы будем рады любому совету, который поможет нам стать лучше!
              </h2>
            </div>
            <div className="box_item_btn_text">
              <button>
                <a href="#">Написать нам</a>
              </button>
              <p>
                Воспользуйтесь формой обратной связи и напишите совет или
                рекомендацию, как нам стать еще лучше. Мы не оставим ни одно
                письмо без должного внимания. Заранее благодарим вас за помощь!
                Также можете оставить отзыв в одной из социальных сетей.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionSecond;
