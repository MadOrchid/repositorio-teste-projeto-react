import React from "react";
import Header from "./componentes/imgs/Header";
import Corpo from "./componentes/Corpo";
import Dados from "./componentes/Dados";

export default function App() {

  const git='MadOrhcid';
  const linke="Leonardo Begossi"
  const insta ='Leonardo Begnossi'

return (
    <div>
      <Header />
      <Corpo />
      <Dados
      gitHub={git}
      linkedin={linke}
      instagram={insta} />
    </div>
  )
}

