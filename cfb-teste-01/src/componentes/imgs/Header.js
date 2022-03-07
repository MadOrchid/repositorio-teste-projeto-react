import React from "react";
import FotoPeter from './peter.jpg';

export default function Header() {
    return(
        <header>
            <img src={FotoPeter} alt='0px' />
            <h1>Foto Do Peter</h1>
        </header>
    )
}