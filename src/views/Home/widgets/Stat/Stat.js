import "./Stat.scss";
export default function Stat({ stat }) {
  return (
    <>
      <strong>{stat.stat.name}</strong>
      <span className={"skill"}>
        <span style={{ width: stat.base_stat }}></span>
      </span>
    </>
  );
}
