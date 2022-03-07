import React from "react";
import Dados from "./Dados";

export default function Corpo() {
    //const git='MadOrhcid';
    const git = () => {
        return 'MadOrchid'
    }
    const linke="Leonardo Begossi"
    const insta ='Leonardo Begnossi'
    const som = (n1, n2) => {
        return n1+n2
    }
    return(
    <section>
        Deixa o Like 
    <Dados
    gitHub={git}
    linkedin={linke}
    instagram={insta}
    somar={som}
    />
    </section>
    )
}