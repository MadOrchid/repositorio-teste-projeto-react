import React from "react";

export default function Dados(props) {
    return(
        <div>
            <p>Git Hub: {props.gitHub} </p>
            <p>Linkedin: {props.linkedin}</p>
            <p>Instagram: {props.instagram}</p>
        </div>
    )
}