import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/pokemon-logo.svg";
import "./Profile.scss";
import Button from "../../components/button/Button";
import MultiSelect from "../../components/multi-select/MultiSelect";
import useGeolocation from "../../services/useGeolocation";
import { useCreateSession, useExistSession } from "../../services/useSession";
import { usePokemonAPI } from "../../services/usePokemonAPI";

export default function Profile() {
  const session = useExistSession({});
  const [logged, setLogged] = useState(false);
  //-
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState({});
  const location = useGeolocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const items = usePokemonAPI();
  // -
  const formatDate = () => {
    const today = new Date();
    const date = {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    };
    date.month = date.month < 10 ? `0${date.month}` : date.month;
    date.day = date.month < 10 ? `0${date.day}` : date.day;
    return `${date.year}-${date.month}-${date.day}`;
  };
  const maxDate = formatDate();
  // -
  useEffect(() => {
    if (Object.hasOwn(session, "username")) {
      setLogged(true);
      setValue("username", session.username);
      setValue("birthdate", session.birthdate);
      setSelected(session.pokemons);
      setValue("pokemons", selected);
    }
  }, []);

  useCreateSession(data);

  useEffect(() => {
    setValue("pokemons", selected);
  }, [selected]);

  useEffect(() => {
    const saved = Object.hasOwn(data, "username");
    if (saved) {
      navigate("/home");
    }
  }, [data]);

  function isDate(value) {
    const difference = Date.now() - new Date(value).getTime();
    const age = new Date(difference);
    const result = Math.abs(age.getUTCFullYear() - 1970);
    if (result < 12) {
      return "Lo sentimos, pero esta aplicación sólo es para mayores de 12 años";
    }
  }

  function pokemonsAllowed(value) {
    const number = value.length;
    if (number < 2) {
      return "Debes seleccionar mínimo 2 pokemones";
    }
    if (number > 6) {
      return "Sólo se permite seleccionar un máximo de 6 pokemones";
    }
  }

  const onSubmit = (data) => {
    data.location = logged ? session.location : location;
    setData(data);
  };

  return (
    <section>
      <div className={"wrapper"}>
        <header>
          <img src={logo} alt="Pokemon" />
          <h1>Registrar tu perfil</h1>
        </header>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <li>
              <label htmlFor="txtUsername">Nombre de usuario:</label>
              <input
                id="txtUsername"
                name="username"
                type="text"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <span className={"msg-error"}>Este campo es obligatorio</span>
              )}
            </li>
            <li>
              <label htmlFor="txtBirthdate">Fecha de nacimiento:</label>
              <input
                id="txtBirthdate"
                name="birthdate"
                type="date"
                max={maxDate}
                placeholder="dd/mm/yyyy"
                {...register("birthdate", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /\d{4}-\d{2}-\d{2}/,
                    message: "No es un formato de fecha válido",
                  },
                  validate: { isDate },
                })}
              />
              {errors.birthdate && (
                <span className={"msg-error"}>{errors.birthdate.message}</span>
              )}
            </li>
            <li>
              <h5>Selecciona tus pokemones favoritos</h5>
              <input
                type="hidden"
                name="pokemons"
                {...register("pokemons", {
                  required: "Este campo es obligatorio",
                  validate: { pokemonsAllowed },
                })}
              />
              <MultiSelect
                items={items}
                selected={selected}
                setSelected={setSelected}
              />
              {errors.pokemons && (
                <span className={"msg-error"}>
                  <span className={"msg-error"}>{errors.pokemons.message}</span>
                </span>
              )}
            </li>
          </ul>
          <p>
            <Button label={"Registrarme"} />
          </p>
        </form>
      </div>
    </section>
  );
}
