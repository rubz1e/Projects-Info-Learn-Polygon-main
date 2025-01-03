import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoPage from "./InfoPage";
import "../../index.css";

function CollapseButton({ name, children, symbol }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ backgroundColor: "#EFEEEC" }}>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="sign-in"
        style={{
          display: "flex",
          gap: "40px",
          width: "100%",
          borderBottom: "0px solid #000000",
          borderRight: "0px",
          backgroundColor: "#EFEEEC",
          paddingLeft: "75px",
        }}
      >
        {name}{" "}
        <div
          style={{
            transform: isOpen ? "rotate(-90deg)" : "rotate(90deg)",
            marginTop: "5px",
          }}
        >
          {symbol}
        </div>
      </button>
      {isOpen && children}
    </div>
  );
}

function Burger({ isOpen, open, close }) {
  return (
    <div
      style={{
        marginLeft: "auto",
        position: "relative",
      }}
    >
      <button
        onClick={() => (isOpen ? close() : open())}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "30px",
          height: "16px",
          padding: 0,
        }}
      >
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            borderRadius: "1px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: isOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            borderRadius: "1px",
            opacity: isOpen ? 0 : 1,
            transition: "opacity 0.3s ease",
          }}
        />
        <div
          style={{
            width: "30px",
            height: "2px",
            backgroundColor: "#000",
            borderRadius: "1px",
            transition: "transform 0.3s ease, opacity 0.3s ease",
            transform: isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }}
        />
      </button>
    </div>
  );
}


function LoginForm() {
  return (
    <div className="ring">
      {/* <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i> */}
      <div className="login">
        {/* <h2>Login</h2> */}
        <div className="inputBx">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Пароль" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Войти" />
        </div>
        <div className="links">
          <a href="#">Восстановление доступа</a>
          {/* <a href="#">Signup</a> */}
        </div>
      </div>
    </div>
  );
}

function RegForm() {
  return (
    <div className="ring">
      <div className="login">
        {/* <h2>Login</h2> */}
        <div className="inputBx">
          <input type="text" placeholder="Логин" />
        </div>
        <div className="inputBx">
          <input type="password" placeholder="Пароль" />
        </div>
        <div className="inputBx">
          <input type="phone" placeholder="Номер телефона" />
        </div>
        <div className="inputBx">
          <input type="group" placeholder="Номер группы" />
        </div>
        <div className="inputBx">
          <input type="submit" value="Войти" />
        </div>
      </div>
    </div>
  );
}

function AuthPage() {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ flexGrow: 1, background: "#E1D6E7" }}>
        <CollapseButton name="Вход" symbol={">"}>
          <div>
            <LoginForm />
          </div>
        </CollapseButton>
        <CollapseButton name="Регистрация" symbol={">"}>
          <div>
            <RegForm />
          </div>
        </CollapseButton>
      </div>
    </div>
  );
}

export default function FirstPage() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [isAuthPage, setIsAuthPage] = useState(true);
  const navigate = useNavigate();

  const togglePage = () => {
    setIsAuthPage((prev) => !prev);
  };

  const menuItems = [
    { label: "Лендинг", route: "/katarium" },
    { label: "Сайт политического устройства", route: "/political-site" },
    { label: "Биржа труда", route: "/job-exchange" },
    { label: "Новостной ресурс", route: "/news" },
  ];

  const buttonPosition = isAuthPage ? { left: "0" } : { right: "0" };

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px",
          borderBottom: "1px solid black",
          background: "#E1D6E7",
        }}
      >
        <span style={{ fontSize: "22px", paddingLeft: "60px" }}>
          Контур системы
        </span>
        <Burger
          isOpen={burgerIsOpen}
          open={() => setBurgerIsOpen(true)}
          close={() => setBurgerIsOpen(false)}
        />
      </header>
      <section
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexGrow: 1,
          backgroundColor: "#E1D6E7",
        }}
      >
        {burgerIsOpen && (
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: "5",
              backgroundColor: "#EFEEEC",
              flexGrow: 1,
            }}
          >
            {menuItems.map(({ label, route }, index) => (
        <button
          key={route}
          onClick={() => navigate(route)}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)} 
          style={{
            display: "flex",
            padding: "30px",
            gap: "40px",
            width: "100%",
            borderBottom: "1px solid #000000",
            backgroundColor: hoveredIndex === index ? "#E1D6E8" : "#EFEEEC", 
            paddingLeft: "75px",
            fontSize: "42px",
            cursor: "pointer",
            transition: "background-color 0.3s ease", 
          }}
        >
          {label}
        </button>
      ))}
          </div>
        )}
        {isAuthPage ? <InfoPage /> : <AuthPage />}
        <button
          onClick={togglePage}
          style={{
            position: "absolute",
            backgroundColor: isHovered ? "#E1D6E7 " : "#1D1D1B",
            padding: "10px 10px",
            borderRight: isHovered ? '1px #1D1D1B solid' : "1px solid transparent" ,
            borderLeft: isHovered ? '1px #1D1D1B solid' : "1px solid transparent" ,
            height: "100%",
            width: "63px",
            transition: "background 0.3s ease",
            ...buttonPosition,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)} 
        >
          <div
            style={{
              color: "#845BFF",
              background: isHovered ? "#1D1D1B" : "#EEEDEB",
              borderRadius: "20px",
              width: "40px",
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {isAuthPage ? <div style={{transform: "rotate(-180deg)", marginBottom: "5px"}}><svg  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{
        stroke: isHovered ? "#EFEEEC" : "#1D1D1B",
      }}>
<path d="M1.8125 23.4609L11.0439 13.3064C11.4797 12.827 11.4797 12.0949 11.0439 11.6155L1.8125 1.46094" stroke-width="1.69783" stroke-linecap="round"/>
</svg>
</div> : <div style={{marginTop: "5px"}}><svg  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)} width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{
        stroke: isHovered ? "#EFEEEC" : "#1D1D1B",
      }}>
<path d="M1.8125 23.4609L11.0439 13.3064C11.4797 12.827 11.4797 12.0949 11.0439 11.6155L1.8125 1.46094" stroke-width="1.69783" stroke-linecap="round"/>
</svg>
</div>}
          </div>
        </button>
      </section>
    </div>
  );
}
