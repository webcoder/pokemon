import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useExistSession } from "../../services/useSession";
import logo from "../../assets/images/pokemon-logo.svg";
import "./Home.scss";
import WeatherWidget from "./widgets/Weather/Weather";
import Card from "./widgets/Card/Card";
import LinkButtonStyle from "../../components/link-button-style/LinkButtonStyle";

export default function Home() {
  const session = useExistSession({});
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();
  // -
  useEffect(() => {
    if (Object.hasOwn(session, "username")) {
      setLogged(true);
    } else {
      navigate("/");
    }
  }, [session]);
  useEffect(() => {}, [session]);

  return (
    <section>
      <div className={"wrapper"}>
        <header>
          <img src={logo} alt="Pokemon" />
          <h1>Detalle de tus pokemones</h1>
        </header>
        <div className={"widgets"}>
          <div className={"profile"}>
            <LinkButtonStyle
              route={"/profile"}
              text={"Editar mi perfil"}
              modifier={"edit"}
            />
          </div>
          {logged ? (
            <div className={"widget"}>
              <WeatherWidget
                latitude={session.location.latitude}
                longitude={session.location.longitude}
              />
            </div>
          ) : (
            <>Cargando ...</>
          )}
        </div>
        <div className={"container"}>
          {logged && session.pokemons.length > 0 ? (
            <>
              {session.pokemons.map(function (item, index) {
                return <Card url={item.url} key={`card_${index}`} />;
              })}
            </>
          ) : (
            <>Cargando ...</>
          )}
        </div>
      </div>
    </section>
  );
}
