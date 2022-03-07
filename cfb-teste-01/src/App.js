import React from "react";

export default function App() {
  const envia = "segundo333";
  const codigo = () => {
    return ('primero001')
  }
  return (
    <div>
      <h1>{codigo()} Texto supremo  {codigo()}</h1>
      <p>{envia}{codigo()} Texto</p>
      <p>Texto2</p>
    </div>
  )
}

