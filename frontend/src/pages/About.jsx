import React from "react";
import NewsLetter from "../shared/Newsletter";

const About = () => {
    return <>
    <section>
      <h1>¿Quienes Somos?</h1>
      <p>
      Somos un equipo de personas con el mismo amor a viajar que vos. Buscamos que tu experiencia con nosotros sea ÚNICA.
      </p>
      <h2>¿Qué hacemos?</h2>
      <p>Te ayudamos a encontrar el viaje ideal para vos. En base a tus gustos y necesidades trabajamos para que tu experiencia de viaje sea la mejor que hayas tenido.</p>
      <h2>¿Cómo lo hacemos?</h2>
      <p>Tenemos un excelente equipo de trabajo especializado para ayudarte a que todo en tu viaje sea como lo soñaste.</p>

      <h3>Vías de comunicación para efectuar reclamos:</h3>

      <p>noelia@tokioviajes.com</p>
      <p>+54 9 261 641 6908</p>

      <h2>Información de la agencia</h2>
      <p>Razón social: VIAJES TK SAS CUIT 30717777634

      Bajo denominación comercial TOKIO VIAJES

      Agencia habilitada Legajo nº 16201
      Agencia Virtual en proceso de habilitación por AVENTURAR</p>

      <p>Para denunciar una agencia ingrese aquí (link https://www.argentina.gob.ar/servicio/presentar-una-denuncia-contra-una-agencia-de-viajes)

      Defensa de las y los consumidores. Para reclamos ingrese aquí (link: https://autogestion.produccion.gob.ar/consumidores) </p>
    </section>
    <section>
      <NewsLetter/>
    </section>
    </>;
};

export default About;
