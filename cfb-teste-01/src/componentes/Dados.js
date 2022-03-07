import React from "react";

export default function Dados(props) {
    const n1 = 50;
    const n2 = 20;
    return(

        <div>
            <p>Git Hub: {props.gitHub()} </p>
            <p>Linkedin: {props.linkedin}</p>
            <p>Instagram: {props.instagram}</p>
            <p>{'A soma de ' + n1 +' com ' +n2+ ' é igual ' + props.somar(n1,n2)}</p>
        </div>
    )
}