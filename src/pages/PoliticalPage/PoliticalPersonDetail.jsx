import React from "react";
import MagicButton from "../../components/MagicButton";
import ArrowBack from "../../assets/BackArrow.svg";
import Person1 from "../../assets/Person1.png";
import Person2 from "../../assets/Person2.png";
import Person3 from "../../assets/Person3.png";
import Person4 from "../../assets/Person4.png";
import Person5 from "../../assets/Person5.png";
import Person6 from "../../assets/Person6.png";
import SamiraNarges from "../../assets/SamiraNarges.png";

export default function PoliticalPersonDetail() {
  return (
    <div style={{ position: "relative" }}>
      <MagicButton />
      <header
        style={{
          backgroundColor: "#061424",
          position: "relative",
          zIndex: "5",
        }}
      >
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div
            style={{
              padding: "20px 20px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              color: "white",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "117px",
                height: "34px",
                backgroundColor: "#B64D4A",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "white",
                gap: "70px",
              }}
            >
              <p>Главная</p>
              <p>Персоны</p>
              <p>Партии</p>
              <p>Политическое устройство</p>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          maxWidth: "1060px",
          padding: "0 15px",
          margin: "0 auto",
          marginTop: "70px",
        }}
      >
        <img src={ArrowBack} alt="ArrowBack" />
      </div>
      <div style={{display: "flex",  maxWidth: "1060px",
          padding: "0 15px",
          margin: "0 auto",
          position: "relative",
          marginTop: "70px",}}>
        <img style={{position: "relative", zIndex: "1"}} src={SamiraNarges} alt="SamiraNarges" />
        <div style={{position: "absolute", top: "-15%", right: "0", maxWidth: "600px", height: "640px", display: "flex", flexDirection: "column", gap: "20px", padding: "120px 40px 110px 140px", backgroundColor: "#A8494B"}}>
          <p style={{fontFamily: "Cormorant Garamond",  fontSize: "18px", color: "white"}}>Министр Здравоохранения</p>
          <p style={{fontSize: "50px", color: "white"}}>Самира Наргес</p>
          <ul style={{fontSize: "18px", listStyleType: "disc", color: "white", lineHeight: "170%"}}>
            <li>Пол: женский</li>
            <li>Дата рождения: 19.09. 1975</li>
            <li>Семейное положение: в браке</li>
            <li>Количество детей: 1</li>
            <li>Образование: Магистратура Катарийский государственный университет имени Давида Кемпа</li>
            <li>Военная служба: нет</li>
            <li>Партия Республиканцев</li>
          </ul>
        </div>
      </div>
      <div
        style={{
          maxWidth: "660px",
          textAlign: "center",
          padding: "0 15px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontFamily: "Cormorant Garamond", 
            fontSize: "50px",
            color: "black",
            textAlign: "center",
            marginTop: "150px",
          }}
        >
          Однопартийцы
        </h2>
        <p
          style={{
            fontSize: "18px",
            color: "black",
            marginTop: "16px",
          }}
        >
          Proin rutrum euismod leo non aliquam. Mauris lacinia ultrices diam, quis bibendum justo auctor eget. Proin rutrum euismod leo non aliquam. 
        </p>
      </div>
      <div
        style={{
          maxWidth: "1060px",
          padding: "0 15px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "100px",
          justifyContent: "space-between",
          marginTop: "120px",
        }}
      >
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Председатель</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Рамин Шахрам
            </p>
          </div>
          <img src={Person1} alt="Person1" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Секретарь</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Джавед Мехран
            </p>
          </div>
          <img src={Person2} alt="Person2" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Дильшат Лалек
            </p>
          </div>
          <img src={Person3} alt="Person3" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Булат Берим
            </p>
          </div>
          <img src={Person4} alt="Person4" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Фарзан Шабнам
            </p>
          </div>
          <img src={Person5} alt="Person5" />
        </div>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "33%",
              right: "-115px",
              padding: "25px 5px",
              backgroundColor: "#B64D4A",
              borderRadius: "3px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p style={{ color: "white", fontSize: "18px" }}>Министр</p>
            <p
              style={{ color: "white", fontSize: "14px", fontStyle: "italic" }}
            >
              Милинда Зейнаб
            </p>
          </div>
          <img src={Person6} alt="Person6" />
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#061424",
          padding: "60px",
          zIndex: "5",
          position: "relative",
          marginTop: "100px",
        }}
      >
        <div
          style={{ maxWidth: "1060px", padding: "0 15px", margin: "0 auto" }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "18px", color: "white" }}>
              Сайт государственного устройства “Катариум”
            </p>
            <div
              style={{
                display: "flex",
                gap: "65px",
                alignItems: "flex-start",
                opacity: 0.5,
                color: "white",
              }}
            >
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>Главная</p>
                <p>Персоны</p>
              </div>
              <div
                style={{ display: "flex", gap: "8px", flexDirection: "column" }}
              >
                <p>Партии</p>
                <p>Политическое устройство</p>
              </div>
            </div>
          </div>
          <hr style={{ marginTop: "60px" }} />
          <p
            style={{
              fontSize: "18px",
              color: "white",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            2023. Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
}