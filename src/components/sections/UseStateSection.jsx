import React, { useState } from "react";

const UseStateSection = () => {
  const [cnt, setcnt] = useState(0);

  const handleIncrementar = () => {
    setcnt(cnt + 1);
  };

  const handleDecrementar = () => {
    setcnt(cnt - 1);
  };

  const handleReset = () => {
    setcnt(0);
  };

  const handleTwo = () => {
    setcnt(cnt + 2);
  };
  return (
    <section className="mt-5">
      <h3 className="text-gray-300 text-2xl font-title">UseState</h3>
      <p className="text-gray-400">Ejemplo básico de UseState</p>
      <div className="p-2 flex items-center space-x-5">
        <button className="Button font-title p-2" onClick={handleIncrementar}>
          Incrementar
        </button>
        <button className="Button font-title p-2" onClick={handleDecrementar}>
          Decrementar
        </button>
        <button className="Button font-title p-2" onClick={handleReset}>
          Reset
        </button>
        <button className="Button font-title p-2" onClick={handleTwo}>
          de 2 en 2
        </button>
        <p className="text-7xl text-gray-300 font-title">{cnt}</p>
      </div>
    </section>
  );
};

export default UseStateSection;
