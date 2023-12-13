import React from "react";

const Imagenes = ({ item:{ image, name, species, gender, status }  }) => {
//   const { image, name, species, gender, status } = item;

  return (
    <div

      className="flex p-3 bg-slate-50 rounded-sm shadow-md shadow-lime-600"
    >
      <img className="w-1/3 rounded-sm mr-2" src={image} alt="" />
      {/* unknown,Alive,Dead */}
      <div>
        <h4 className="font-title text-gray-400 text-3xl">{name}</h4>
        <p className="text-black">
          {" "}
          <b>Especie:</b> {species}
        </p>
        <p className="text-black ">
          {" "}
          <b>Género:</b> {gender}
        </p>
        <p className="text-black mt-2">
          {" "}
          <b>Estado:</b>
        </p>
        <span className={`rounded-md ${status==='Alive'?'bg-green-600':(status==='Dead'?'bg-red-600':'bg-orange-500')} font-title px-3 text-center text-white`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default Imagenes;
