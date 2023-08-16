import React from 'react';
import Card from './card';

const Formulario = ({ nombre, setNombre, animalPreferido, setAnimalPreferido, handleSubmit }) => {
  const [error, setError] = React.useState('');
  const [submitClicked, setSubmitClicked] = React.useState(false);

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
    setError('');
  };

  const handleColorChange = (e) => {
    setAnimalPreferido(e.target.value);
    setError('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);

    let validationError = '';

    if (nombre.length < 3 || nombre.startsWith(' ') || animalPreferido.length < 6) {
      validationError = 'Por favor chequea que la información sea correcta';
    }

    setError(validationError);

    if (!validationError) {
      handleSubmit();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Card>
        <form
          onSubmit={handleFormSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '16px',
            borderRadius: '4px'
          }}
        >
          <input
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="Ingresa tu nombre"
            style={{
              borderRadius: '4px',
              height: '24px',
              paddingLeft: '8px'
            }}
          />
          <input
            type="text"
            placeholder="Ingresa tu animal preferido"
            value={animalPreferido}
            onChange={handleColorChange}
            style={{
              borderRadius: '4px',
              height: '24px',
              paddingLeft: '8px'
            }}
          />
          <button style={{ padding: '8px', background: '#0000FF', color: 'white' }}>
            ENVIAR
          </button>
        </form>
      </Card>
      {submitClicked && error && <span style={{ color: 'red', marginTop: '8px' }}>{error}</span>}
    </div>
  );
};

export default Formulario;
