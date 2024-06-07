import "./Button.scss";
export default function Button({ label, modifier }) {
  return <button className={modifier}>{label}</button>;
}
