import { useEffect } from "react";
import "./MultiSelect.scss";

export default function MultiSelect({ items, setSelected, selected }) {
  useEffect(() => {
    console.log("multi-select");
    selected.forEach((element) => {
      const toUpdate = document.querySelector(`#item_${element.name}`);
      if (toUpdate != null) {
        toUpdate.checked = true;
      }
    });
  });
  function remove(event) {
    const element = event.target.id.split("_");
    const id = element[1];
    const toUpdate = document.querySelector(`#item_${id}`);
    toUpdate.checked = false;

    selected = selected.filter(function (item) {
      return item.name !== id;
    });
    console.log(selected);
    setSelected(selected);
    //notify();
  }

  function updateSelected(event) {
    const element = event.target;
    const id = element.value;
    let exist = [];
    if (element.checked) {
      exist = items.find(function (item) {
        return item.name === id;
      });
      if (exist) {
        selected.push(exist);
        setSelected([...selected]);
      }
    } else {
      selected = selected.filter(function (item) {
        return item.name !== id;
      });
      setSelected(selected);
    }
    //notify();
  }
  return (
    <div className={"multi-select"}>
      <div className={"chips"}>
        {selected.map(function (value) {
          return (
            <span key={value.name} className={"tag"}>
              {value.name}
              <span
                id={"chip_" + value.name}
                className={"icon-close"}
                onClick={remove}
              >
                X
              </span>
            </span>
          );
        })}
      </div>
      <div className={"list"}>
        <ul className={"items"}>
          {items.map(function (item, index) {
            const id = `item_${item.name}`;
            return (
              <li key={index}>
                <input
                  id={id}
                  type="checkbox"
                  onChange={updateSelected}
                  value={item.name}
                />
                <label htmlFor={id}>{item.name}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
