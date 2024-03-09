import React, { useState, useEffect } from 'react';
import api from '../utils/api';
import { toast } from 'react-hot-toast';

const Agregar = ({ setContactos }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nuevoNombre = event.target.elements.nombre.value;
    const nuevoApellido = event.target.elements.apellido.value;
    const nuevoTelefono = event.target.elements.telefono.value;
    const nuevoDireccion = event.target.elements.direccion.value;
    const nuevoEmail = event.target.elements.email.value;

    const contactoData = {
      nombre: nuevoNombre,
      apellido: nuevoApellido,
      telefono: nuevoTelefono,
      direccion: nuevoDireccion,
      email: nuevoEmail,
    };

    try {
      const nuevoContacto = await api.crearContacto(contactoData);

      setContactos((prevContactos) => [...prevContactos, nuevoContacto]);

      setNombre('');
      setApellido('');
      setTelefono('');
      setDireccion('');
      setEmail('');

      console.log('Contacto creado exitosamente:', nuevoContacto);
      toast.success('Contacto creado', { icon: '👍' });
    } catch (error) {

      console.error('Error al crear el contacto:', error);

    }

    document.getElementById('my_modal_1').close();
  };

  return (
    <>
      <button onClick={() => document.getElementById('my_modal_1').showModal()} className="btn px-8 bg-primario shadow-lg text-white">Agregar<i className="fa fa-plus-circle fa-2x"></i></button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Agregar contacto</h3>
          <p className="py-4">Ingrese los datos</p>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input type="text" name="nombre" placeholder="Nombre" className="input" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              <input type="text" name="apellido" placeholder="Apellido" className="input" value={apellido} onChange={(e) => setApellido(e.target.value)} />
              <input type="text" name="telefono" placeholder="Teléfono" className="input" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
              <input type="text" name="direccion" placeholder="Dirección" className="input" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
              <input type="text" name="email" placeholder="Email" className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button type="submit" className="btn text-white bg-primario">Guardar</button>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={() => document.getElementById('my_modal_1').close()}>Cerrar</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Agregar;



const Salir = () => {
    return (
      <>
        <button onClick={()=>document.getElementById('my_modal_2').showModal()} className="btn px-8 shadow-lg">Salir<i className="fa fa-sign-out"></i></button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Wait!</h3>
            <p className="py-4">🤨 Seguro que deseas salir?</p>
            <div className="modal-action">
              <form method="dialog">
                <div className="flex gap-4">
                  <button className="btn btn-error text-white" onClick={()=>window.close()}>🥺 Sí, Salir</button>
                  <button className="btn">😁 No</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </>
    )
}

export { Agregar, Salir }