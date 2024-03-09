import axios from 'axios';

const URL_BASE_API = 'https://65eb738043ce16418933dee5.mockapi.io/api/v1/'; 

const api = {
  obtenerTodosContactos: async () => {
    const respuesta = await axios.get(`${URL_BASE_API}/contacto`);
    return respuesta.data;
  },

  obtenerContactoPorId: async (id) => {
    const respuesta = await axios.get(`${URL_BASE_API}/contacto/${id}`);
    return respuesta.data;
  },

  crearContacto: async (contacto) => {
    const respuesta = await axios.post(`${URL_BASE_API}/contacto`, contacto);
    return respuesta.data;
  },

  actualizarContacto: async (id, contacto) => {
    const respuesta = await axios.put(`${URL_BASE_API}/contacto/${id}`, contacto);
    return respuesta.data;
  },

  eliminarContacto: async (id) => {
    const respuesta = await axios.delete(`${URL_BASE_API}/contacto/${id}`);
    return respuesta.data;
  },
};

export default api;
