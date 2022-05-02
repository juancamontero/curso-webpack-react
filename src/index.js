import React from "react"; //importar react
import ReactDOM from "react-dom"; //importar react
import App from "./components/App"; //importar componente
import './styles/global.scss'

ReactDOM.render(<App />, document.getElementById("app")); //Crea recurso hacia donde se importa la app, 1er elemento <App /> es el componente, 2do "container de despliegue"
