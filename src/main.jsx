import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import DetalleContacto from "./views/detalle-contacto";
import Contactos from "./views/contactos";

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Contactos />,
  },
  { 
    path: "contacto/:id",
    element: <DetalleContacto />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);