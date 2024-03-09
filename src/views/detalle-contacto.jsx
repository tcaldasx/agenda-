import { useParams } from "react-router-dom";
import { PerfilUsuario } from "../components/perfil";
import { useState } from "react";
import api from "../utils/api";
import { useEffect } from "react";

const detalleContacto = () => {
  const { id } = useParams();
  const [contacto, setContacto] = useState({});
  useEffect(() => {
    api.obtenerContactoPorId(id).then((data) => {
      setContacto(data);
    });
  }, [id]);

  return (
    <>
      <div className="bg-primario shadow-md flex gap-4 justify-between items-center text-white my-6 mx-8 rounded-3xl py-6 px-4 flex-col">
        <p className="flex items-center justify-center text-2xl font-semibold mb-4">
            Detalle de Contacto
        </p>
        <PerfilUsuario
            id={"contacto.id"}
            nombre={contacto.nombre}
            apellido={contacto.apellido}
            telefono={contacto.telefono}
            direccion={contacto.direccion}
            email={contacto.email}
        />
      </div>
    </>
  );
};

export default detalleContacto;
