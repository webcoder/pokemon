import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useExistSession } from "../../services/useSession";
import "./Start.scss";
import logo from "../../assets/images/pokemon-logo.svg";
import LinkButtonStyle from "../../components/link-button-style/LinkButtonStyle";
export default function Start() {
  const session = useExistSession();
  const logged = Object.hasOwn(session, "username");
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      navigate("/home");
    }
  }, [logged]);
  return (
    <section>
      <div className={"wrapper"}>
        <header>
          <img src={logo} alt="Pokemon" />
          <h1>Bienvenido</h1>
        </header>
        <LinkButtonStyle
          text={"Registrarse"}
          route={"profile"}
          modifier={"default"}
        />
      </div>
    </section>
  );
}
