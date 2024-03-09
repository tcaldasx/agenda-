import api from '../utils/api';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export const Tarjeta = ({ id, nombre, apellido, telefono, direccion, email, setContactos }) => {

  const eliminarContacto = async () => {
    toast('Contacto eliminado', { icon: '🗑️' });
    setContactos((prevContactos) => prevContactos.filter((contacto) => contacto.id !== id));
    const respuesta = await api.eliminarContacto(id);
  };
  
  return (
    <div className="bg-primario shadow-md flex gap-4 justify-between items-center text-white my-6 mx-8 rounded-3xl py-6 px-4">
      <div className="flex items-center gap-8">
        <i className="fa fa-user fa-2x"></i>
        <div>
          <p className="capitalize">{nombre}</p>
          <p className="capitalize">{apellido}</p>
          <p className="capitalize">{direccion}</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <Link to={`/contacto/${id}`}><i className="fa-solid fa-eye "></i></Link>
        <button onClick={() => window.location.href = 'mailto:' + email}><i className="fa-solid fa-envelope "></i></button>
              <button onClick={() => window.location.href = 'tel:' + telefono}><i className="fa-solid fa-phone"></i></button>
        <button onClick={eliminarContacto}><i className="fa-solid fa-close pr-2"></i></button>
      </div>
    </div>
  );
};

