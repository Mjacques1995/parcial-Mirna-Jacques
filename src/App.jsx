import React from 'react';
import './App.css'
import Formulario from './Components/formulario';
import Mensaje from './Components/mensaje';

function App() {
  const [nombre, setNombre] = React.useState('');
  const [animalPreferido, setAnimalPreferido] = React.useState('');
  const [mostrarModal, setMostrarModal] = React.useState(false);

  const handleSubmit = () => {
    setMostrarModal(true);
  };

  return (
    <div
      className="App"
      style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
    >
      <Formulario
        nombre={nombre}
        setNombre={setNombre}
        animalPreferido={animalPreferido}
        setAnimalPreferido={setAnimalPreferido}
        handleSubmit={handleSubmit}
      />

      <Mensaje
        mostrarModal={mostrarModal}
        nombre={nombre}
        animalPreferido={animalPreferido}
        error={nombre.length < 3 || nombre.trim() === "" || animalPreferido.length < 6}
      />

    </div>
  );
}

export default App
