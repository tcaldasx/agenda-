import { Agregar, Salir } from "../components/botones";
import { BarraBuscar } from "../components/barra-buscar";
import { Tarjeta } from "../components/tarjeta";
import api from "../utils/api";
import { useEffect, useState } from "react";

import { Toaster } from 'react-hot-toast'
      

const Contactos = () => {
  const [contactos, setContactos] = useState([]);
  const [cantidadTarjetas, setCantidadTarjetas] = useState(0);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const obtenerContactos = async () => {
      try {
        const contactosData = await api.obtenerTodosContactos();
        setContactos(contactosData);
        setCantidadTarjetas(contactosData.length);
      } catch (error) {
        console.error("Error al obtener contactos:", error);
      }
    };

    obtenerContactos();
  }, []);

  const contactosFiltrados = contactos.filter((contacto) => {
    const nombreCompleto = `${contacto.nombre} ${contacto.apellido}`.toLowerCase();
    return nombreCompleto.includes(busqueda.toLowerCase());
  });

  return (
    <>
      <div className="divider font-semibold">Agenda+</div>
      <div className="p-4">
        <BarraBuscar onBuscarCambio={(valor) => setBusqueda(valor)} />
      </div>

      <div className="flex items-center justify-center gap-4">
        <Agregar setContactos={setContactos} />
        <Salir />
      </div>

      <div className="lg:w-2/4 m-auto">
        {contactosFiltrados.length > 0 ? (
          contactosFiltrados.map((contacto) => (
            <Tarjeta
              key={contacto.id}
              id={contacto.id}
              nombre={contacto.nombre}
              apellido={contacto.apellido}
              telefono={contacto.telefono}
              direccion={contacto.direccion}
              email={contacto.email}
              setContactos={setContactos}
            />
          ))
        ) : (
            <p class="text-center pt-6 py-2 text-red-900">🚨 ¡No hay contactos disponibles! 🚨</p>
        )}
      </div>

      <div className="flex items-center justify-center">
        Cantidad de contactos: {contactosFiltrados.length}
      </div>
      <div><Toaster/></div>
    </>
  );
};

export default Contactos;
