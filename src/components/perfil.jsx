export const PerfilUsuario = ({ nombre, apellido, telefono, direccion, email }) => {
    return (
      <div className="max-w-md mx-auto p-8 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-2">{nombre} {apellido}</h2>
        <p className=" mb-2">Teléfono: {telefono}</p>
        <p className=" mb-2">Dirección: {direccion}</p>
        <p className=" mb-2">Email: {email}</p>
  
        <div className="flex justify-between">
          <button className="text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300" onClick={() => window.location.href = 'tel:' + telefono}>Llamar<i className="mx-2 fa-solid fa-phone"></i></button>
          <button className=" text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-green-300" onClick={() => window.location.href = 'mailto:' + email}>Email<i className="mx-2 fa-solid fa-envelope "></i></button>
          <button className=" text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-gray-300" onClick={() => window.history.back()}>Regresar<i className="mx-2 fa fa-sign-out"></i></button>
        </div>
      </div>
    );
  };