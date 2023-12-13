import axios from "axios";
import React, { useEffect, useState } from "react";
import Imagenes from "../Imagenes";
import Loading from "../Loading";

const Api = () => {
  const [Character, setCharacter] = useState([]);

  async function getCharacter() {
    const {
      data: { results },
    } = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(results);
    setCharacter([...results]);
  }

  return (
    <section>
      <h3 className="text-gray-300 text-2xl font-title">API</h3>
      <p className="text-gray-400">Consumo de la API</p>
      <button onClick={getCharacter} className="Button font-title p-2 mt-3">
        Consultar
      </button>
      <div className=" mt-3">
        <div className="flex flex-wrap">
         

          {Character.length === 0 && <Loading></Loading>}

          {Character.length !== 0 &&
            Character.map((item) => <Imagenes key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
};

export default Api;
