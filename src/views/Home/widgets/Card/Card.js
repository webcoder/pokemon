import { usePokemonItem } from "../../../../services/usePokemonAPI";
import Stat from "../Stat/Stat";
import "./Card.scss";
export default function Card({ url }) {
  const data = usePokemonItem(url);
  return (
    <div className={"element"}>
      {data === undefined ? (
        <p>Cargando</p>
      ) : (
        <>
          <div>
            <img src={data?.sprites?.front_default} alt="Pokemon name" />
            <h5>{data.name}</h5>
            <p>
              Altura: <strong>{data?.height}</strong>
            </p>
            <p>
              Peso: <strong>{data?.weight}</strong>
            </p>
            <p className={"skills"}>
              Habilidades:
              {data?.abilities?.map(function (skill, index) {
                return (
                  <strong key={`skill_${index}`}>{skill?.ability?.name}</strong>
                );
              })}
            </p>
          </div>
          <div>
            <h6>Estad&iacute;sticas</h6>
            <ul className={"stats"}>
              {data?.stats?.map(function (stat, index) {
                return (
                  <li key={`stat_${index}`}>
                    <Stat stat={stat} />
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
